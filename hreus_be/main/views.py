from django.shortcuts import render

# Index
def index(request):
    return render(request, "index.html")