from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.template import loader
from .models import Post
from .forms import PostForm

def post_list(request):
    myposts = Post.objects.all().values().order_by('-created_at')
    template = loader.get_template("post_list.html")
    context = {
        'myposts' : myposts,
    }
    return HttpResponse(template.render(context, request))

def post_create(request):
    if request.method == "POST":
        form = PostForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('../post_list') 
    else:
        form = PostForm()
    
    return render(request, 'post_create.html', {'form': form})