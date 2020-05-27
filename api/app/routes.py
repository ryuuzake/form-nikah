from app import app, db
from flask import request, abort, jsonify
from app.models import Form

FORM = {"date": "12/12/2022", "location": "Surabaya", "nationality": "WNI", "maleFamilyName": "Fujii", "maleShortName": "Natsuo", "maleBirthday": "13/07/1997", "maleReligion": "Buddha", "maleOccupation": "Penulis", "maleAddress": "Jepang", "maleMarried": "belum", "maleExName": "-", "maleChildName": "-", "maleFatherFamilyName": "Fujii", "maleFatherShortName": "Akihito", "maleFatherBirthday": "13/09/1977", "maleFatherReligion": "Buddha", "maleFatherOccupation": "Pekerja Swasta", "maleFatherAddress": "Jepang", "maleMotherFamilyName": "Fujii", "maleMotherShortName": "Tsukiko", "maleMotherBirthday": "14/10/1977", "maleMotherReligion": "Buddha", "maleMotherOccupation": "Pekerja Swasta", "maleMotherAddress": "Jepang", "femaleFamilyName": "Tachibana", "femaleShortName": "Rui", "femaleBirthday": "05/09/1997", "femaleReligion": "Buddha", "femaleOccupation": "Koki", "femaleAddress": "Jepang", "femaleMarried": "belum", "femaleExName": "-", "femaleChildName": "-", "femaleFatherFamilyName": "Fujii", "femaleFatherShortName": "Akihito", "femaleFatherBirthday": "13/09/1977",  "femaleFatherReligion": "Buddha",  "femaleFatherOccupation": "Pekerja Swasta",  "femaleFatherAddress": "Jepang",  "femaleMotherFamilyName": "Fujii",  "femaleMotherShortName": "Tsukiko",  "femaleMotherBirthday": "14/10/1977",  "femaleMotherReligion": "Buddha",  "femaleMotherOccupation": "Pekerja Swasta",  "femaleMotherAddress": "Jepang",  "witnessOneFamilyName": "Tachibana",  "witnessOneShortName": "Hina",  "witnessOneBirthday": "06/04/1991",  "witnessOneReligion": "Buddha",  "witnessOneOccupation": "Pekerja Swasta",  "witnessOneAddress": "Jepang",  "witnessTwoFamilyName": "Mikimoto",  "witnessTwoShortName": "Jou",  "witnessTwoBirthday": "13/09/1977",  "witnessTwoReligion": "Buddha",  "witnessTwoOccupation": "Koki",  "witnessTwoAddress": "Jepang"}

def check_form(response):
    return {k: v for k, v in response.items() if v is not None}

@app.route('/api/form/', methods=['GET', 'POST'])
def form():
    if request.method == 'POST':
        print(request.json)
        form_filtered = check_form(request.json)
        if not form_filtered:
            abort(404)

        print(form_filtered)
        
        new_form = Form()
        new_form.from_dict(form_filtered)
        db.session.add(new_form)
        db.session.commit()
        
        return jsonify({'form': form_filtered}), 201
    forms = Form.query.all()
    return jsonify({'form': [item.to_dict() for item in forms]}), 200
  