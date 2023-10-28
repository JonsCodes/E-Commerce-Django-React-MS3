from email.policy import default
from pyexpat import model
from unicodedata import decimal
from django.db import models
from shortuuid.django_fields import ShortUUIDField
from django.utils.html import mark_safe
from django.contrib.auth import User
from django.db import models



STATUS_CHOICES = (
  ('in Stock', 'In Stock'),
  ('out of Stock', 'Out of stock'),
  ('backorder', 'Backorder'),    
)

STATUS = (
  ('draft', 'Draft'),
  ('disabled', 'Disabled'),
  ('rejected', 'Rejected'),  
  ('in_review', 'In Review'),
  ('published', 'Published'),
)

RATING = (
  ( 1, '🥊'),
  ( 2,'🥊🥊'),
  ( 3,'🥊🥊🥊'),  
  ( 4,'🥊🥊🥊🥊'),
  ( 5,'🥊🥊🥊🥊🥊'),
)


def user_directory_path(instance, filename):
  return 'user_{0}/{1}'.format(instance.user.id, filename)
  

class Category(models.Model):
  cid = ShortUUIDField(unique=True, Length=6, max_length=10, prefix='cat', alhabet="abcdefgh12345")
  title = models.CharField(max_length=50, default="Swag")
  image = models.ImageField(upload_to='category.jpg')

  class Meta:
    verbose_name_plural = "Categories"

  def category_image(self):
    return mark_safe('<img src="{self.image.url}" width="50" height="50" />' % (self.image.url)) 
  def __str__(self):
    return self.title
  
class Tags(models.models):
  pass
  
  # Vendor Section (Rene ***Might not need this section***)
class Vendor(models.Model): 
  vid = ShortUUIDField(unique=True, Length=6, max_length=10, prefix='ven', alhabet="abcdefgh12345")


  title = models.CharField(max_length=50, default="Opp Busters")
  image = models.ImageField(upload_to='user_directory_path', default="vendor.jpg") 
  description = models.TextField(null=True, blank=True, default="We Catch Opp's")

  address = models.TextField(max_length=100, default="1904 KnockOut st.")
  contact = models.TextField(max_length=100, default="1 800 Get-Folded")
  chat_resp_time = models.CharField(max_Length=100, default="100")
  shipping_on_time = models.CharField(max_Length=100, default="100")
  authentic_rating = models.CharField(ma_Length=100, default="100")
  days_return = models.CharField(max_Length=100, default="100") 
  warranty_period = models.CharField(max_Length=100, default="100") 

  # whenever a User is deleted their page is deleted also.
  user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)

  class Meta:
    verbose_name_plural = "Vendor"
  def vendor_image(self):
    return mark_safe('<img src="{self.image.url}" width="50" height="50" />' % (self.image.url)) 
  def __str__(self):
    return self.title
  
class Product(models.model):
  
  user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
  Category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)

  pid = ShortUUIDField(unique=True, Length=6, max_length=10, alhabet="abcdefgh12345")

  title = models.CharField(max_length=50, default="Product Title")
  image = models.ImageField(upload_to='user_directory_path', default="default.jpg") 
  description = models.TextField(null=True, blank=True, default="No description")
  
  price = models.DecimalField(max_digits=999999, decimal_places=2, default=0.00)
  old_price = models.DecimalField(max_digits=999999, decimal_places=2, default=2.99)

  specifications = models.TextField(null=True, blank=True)
  ###### adding tags later ##########
  # tags = models.ForeignKey(Tags, null=True, blank=True)

  product_status = models.CharField(choices=STATUS, max_length=20, default="In_review",)

  status= models.BooleanField(default=True)
  in_stock = models.BooleanField(default=True)
  featured = models.BooleanField(default=False)
  digital = models.BooleanField(default=False)

  pid = ShortUUIDField(unique=True, Length=6, max_length=10, prefix='sku', alhabet="1234567890")

  date = models.DateTimeField(auto_now_add=True)
  updated = models.DateTimeField(auto_now=True)

  class Meta:
    verbose_name_plural = "Product"
  def product_image(self):
    return mark_safe('<img src="{self.image.url}" width="50" height="50" />' % (self.image.url)) 
  def __str__(self):
    return self.title
  
  def get_percentage(self):
    new_price = (self.price / self.old_price) * 100
    return new_price
  
class ProductImages(models.model):
  images = models.ImageField(upload_to='product-images', default="product.jpg")
  product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
  date = models.DateTimeField(auto_now_add=True)

  class Meta:
    verbose_name_plural = "Products Images"

    ##########################################
    ############## cart section ##############

class CartOrder(models.model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=999999, decimal_places=2, default=0.00)
    paid_status = models.BooleanField(default=False)
    order_date = models.DateTimeField(auto_now_add=True)
    product_status = models.CharField(choices=STATUS_CHOICES, max_length=20, default="Processing")

    class Meta:
        verbose_name_plural = "Cart Order"

class CartOrderItems(models.model):
    Order = models.ForeignKey(CartOrder, on_delete=models.CASCADE)
    invoice_number = models.CharField(max_length=200)
    paid_status = models.CharField(max_length=200)
    item = models.CharField(max_length=200)
    image = models.CharField(max_length=200)
    qty = models.IntegerField(default=0)
    price = models.DecimalField(max_digits=999999, decimal_places=2, default=0.00)
    total = models.DecimalField(max_digits=999999, decimal_places=2, default=0.00)

    class Meta:
      verbose_name_plural = "Cart order items"

    def Order_img(self):
      return mark_safe('<img src="/media/%s" width="50" height="50" />' % (self.image)) 

        
        
        #######################################################################
        ############## Product Review, wishlist, Address section ############## 

class ProductReviews(models.model):
  user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
  Product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
  review = models.TextField()
  rating = models.IntegerField(choices=RATING, default=None)
  date = models.DateTimeField(auto_now_add=True)

  class Meta:
    verbose_name_plural = "Product Reviews"
  def __str__(self):
    return self.Product.title
  
  def get_rating(self):
    return self.rating
  
class Wishlist(models.model):
  user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
  Product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
  date = models.DateTimeField(auto_now_add=True)

  class Meta:
    verbose_name_plural = "wishlists"
  def __str__(self):
    return self.Product.title
  

class Address(models.model):
  user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
  address = models.CharField(max_length=100, null=True)
  status = models.BooleanField(default=False)

  class Meta:
    verbose_name_plural = "Address"


  

  


  


  

