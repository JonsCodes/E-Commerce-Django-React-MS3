from django.http import HttpResponse
from django.shortcuts import render

from ecommerce_backend.models import Product, Category, Vendor, CartOrder, CartOrderItems, ProductImages, ProductReviews, Wishlist, Address

def index(request):
    products = Product.objects.all()

    context = {
        "products": products
    }

    return render(request, 'index.html', context)

