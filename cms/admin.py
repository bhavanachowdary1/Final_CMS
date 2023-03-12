from django.contrib import admin

from cms.models import Course,Components, ModelUnits
# from cms.models import User

class CourseDisplay(admin.ModelAdmin):
    list_display=('id','CourseName', 'Desc','CourseImage',)
    list_display_links=('CourseName',)
    list_filter=('CourseName',)


admin.site.register(Course,CourseDisplay)

class ComponentsDisplay(admin.ModelAdmin):
    list_display=('id','Modules',)
    list_display_links=('Modules',)
    list_filter=('Modules',)


admin.site.register(Components,ComponentsDisplay)

class UnitsDisplay(admin.ModelAdmin):
    list_display=('id','Units', 'Text')
    list_display_links=('Units',)
    list_filter=('Units',)


admin.site.register(ModelUnits,UnitsDisplay)



# Register your models here.
# admin.site.register(Regform)
# admin.site.register(User)