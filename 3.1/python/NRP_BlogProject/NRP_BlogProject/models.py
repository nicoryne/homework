from django.db import models

##
# Post Model
# 
# Title: CharField (maximum length of 255)
# Content: TextField
# Created_at: DateTimeField (use_auto_now = True)
# Updated_at: DateTImeFIeld (use_auto_now = True)
##

class Post (models.Model):
    title = models.CharField(max_length = 255)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    
    def __str__(self):
        formatted_date = self.created_at.strftime('%Y-%m-%d %H:%M')
        
        return f"{self.title} (Created on: {formatted_date}) - {self.content[:30]}..."
    

