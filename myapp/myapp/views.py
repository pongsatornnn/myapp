from django.shortcuts import render,redirect
 
def index(request):
    return render(request, 'index.html')

def form(request):
    if request.method == "POST":
        return redirect('/')
    else:
        return render(request,"form.html")