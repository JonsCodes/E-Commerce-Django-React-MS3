from django.contrib import admin
from ecommerce_backend.models import Product, Category, Vendor, CartOrder, CartOrderItems, ProductImages, ProductReviews, Wishlist, Address

class ProductImagesAdmin(admin.ModelAdmin):
  model= ProductImages

class ProductAdmin(admin.ModelAdmin):
  inlines = [ProductImagesAdmin]
  list_display = ['user', 'title', 'Product_image', 'price', 'featured', 'Product_status']

class CategoryAdmin(admin.ModelAdmin):
  list_display = ['title', 'category_image']

class VendorAdmin(admin.ModelAdmin):
  list_display = ['title', 'Vendor_image']

class CartOrderAdmin(admin.ModelAdmin):
  list_display = ['user', 'paid_status','price', 'order_date', 'product_status']

class CartOrderItemsAdmin(admin.ModelAdmin):
  list_display = ['order', 'invoice_number', 'item', 'image', 'qty', 'price', 'total']

class ProductReviewsAdmin(admin.ModelAdmin):
  list_display = ['user', 'Product', 'review', 'rating', 'date']

class WishlistAdmin(admin.ModelAdmin):
  list_display = ['user', 'Product', 'date']

class AddressAdmin(admin.ModelAdmin):
  list_display = ['user', 'address', 'status']

admin.site.register(Product, ProductAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Vendor, VendorAdmin)
admin.site.register(CartOrder, CartOrderAdmin)
admin.site.register(CartOrderItems, CartOrderItemsAdmin)
admin.site.register(ProductReviews, ProductReviewsAdmin)
admin.site.register(Wishlist, WishlistAdmin)
admin.site.register(Address, AddressAdmin)


