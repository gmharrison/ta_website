# Views go here
from django.views.generic.base import TemplateView

class HomePageView(TemplateView):
    template_name = "tawebsite/home.html"
    def get_context_data(self, **kwargs):
        context = super(HomePageView, self).get_context_data(**kwargs)
        return context
        




