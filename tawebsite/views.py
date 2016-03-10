# Views go here
from django.views.generic.base import TemplateView

class HomePageView(TemplateView):
    template_name = "tawebsite/home.html"
        
class SurveyView(TemplateView):
    template_name = "tawebsite/survey.html"
 
        




