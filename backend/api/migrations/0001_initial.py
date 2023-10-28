from django.db import migrations, models
from api.user.models import CustomUser


class Migration(migrations.Migration):

    dependencies = []

    def seed_data(apps, schema_editor):
        user = CustomUser(name="Admin",
                          email="johnalyashai@me.com",
                          is_staff=True,
                          is_superuser=True,
                          phone="6195551111",
                          gender="Male"
                          )
        user.set_password("1234")
        user.save()

    operations = [
        migrations.RunPython(seed_data),
    ]
