from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import get_user_model
import braintree
# Create your views here.
import braintree

gateway = braintree.BraintreeGateway(
  braintree.Configuration(
      braintree.Environment.Sandbox,
      merchant_id="tbbv78q93w5v62fn",
      public_key="xk7q3j66pwv9fp3n",
      private_key="b3dd067e7bfdafc335ad8314176efba3"
  )
)

def validate_user_session(id, token):
    UserModel = get_user_model()
    
    try:
        user = UserModel.objects.get(pk=id)
        if user.session_token == token:
            return True
        return False
    except UserModel.DoesNotExist:
        return False

@csrf_exempt
def generate_client_token(id, token):
    if not validate_user_session(id, token):
        return JsonResponse({'error': 'Invalid Session, Please login again!'})
    
    return JsonResponse({'clientToken': gateway.client_token.generate(), 'success': True})

@csrf_exempt
def generate_client_token(request, id, token):
    if not validate_user_session(id, token):
        return JsonResponse({'error': 'Invalid Session, Please login again!'})

    
@csrf_exempt
def process_payment(request, id, token):
    if not validate_user_session(id, token):
        return JsonResponse({'error': 'Invalid Session, Please login again!'})
    
    try:
        nonce_from_the_client = request.POST['paymentMethodNonce']
        amount_from_the_client = request.POST['amount']
        
        result = gateway.transaction.sale({
            "amount": amount_from_the_client,
            "payment_method_nonce": nonce_from_the_client,
            "options": {
                "submit_for_settlement": True
            }
        })
        
        if result.is_success:
            return JsonResponse({
                'success': result.is_success,
                'transaction': {'id': result.transaction.id, 'amount': result.transaction.amount}
            })
        else:
            return JsonResponse({'error': True, 'success': False, 'message': result.message})

    except Exception as e:
        # Handle exceptions or errors if necessary
        return JsonResponse({'error': str(e), 'success': False})
    
