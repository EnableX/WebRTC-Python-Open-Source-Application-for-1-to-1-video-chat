from django.conf import settings

def enablex_settings(request):
    # return any necessary values
    return {
        'ENABLEX_API_URL': settings.ENABLEX_API_URL,
        'ENABLEX_APP_ID': settings.ENABLEX_APP_ID,
        'ENABLEX_APP_KEY': settings.ENABLEX_APP_KEY,
    }