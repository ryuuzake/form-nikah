from app import app
from flask import request, abort, jsonify

FORM = {'date': '12/12/2022',
        'location': 'Surabaya',
        'nationality': 'WNI',
        'maleFamilyName': 'Fujii',
        'maleShortName': 'Natsuo',
        'maleBirthday': '13/07/1997',
        'maleReligion': 'Buddha',
        'maleOccupation': 'Penulis',
        'maleAddress': 'Jepang',
        'maleMarried': 'belum',
        'maleExName': '-',
        'maleChildName': '-',
        'maleFatherFamilyName': 'Fujii',
        'maleFatherShortName': 'Akihito',
        'maleFatherBirthday': '13/09/1977',
        'maleFatherReligion': 'Buddha',
        'maleFatherOccupation': 'Pekerja Swasta',
        'maleFatherAddress': 'Jepang',
        'maleMotherFamilyName': 'Fujii',
        'maleMotherShortName': 'Tsukiko',
        'maleMotherBirthday': '14/10/1977',
        'maleMotherReligion': 'Buddha',
        'maleMotherOccupation': 'Pekerja Swasta',
        'maleMotherAddress': 'Jepang',
        'femaleFamilyName': 'Tachibana',
        'femaleShortName': 'Rui',
        'femaleBirthday': '05/09/1997',
        'femaleReligion': 'Buddha',
        'femaleOccupation': 'Koki',
        'femaleAddress': 'Jepang',
        'femaleMarried': 'belum',
        'femaleExName': '-',
        'femaleChildName': '-',
        'femaleFatherFamilyName': 'Fujii',
        'femaleFatherShortName': 'Akihito',
        'femaleFatherBirthday': '13/09/1977', 
        'femaleFatherReligion': 'Buddha', 
        'femaleFatherOccupation': 'Pekerja Swasta', 
        'femaleFatherAddress': 'Jepang', 
        'femaleMotherFamilyName': 'Fujii', 
        'femaleMotherShortName': 'Tsukiko', 
        'femaleMotherBirthday': '14/10/1977', 
        'femaleMotherReligion': 'Buddha', 
        'femaleMotherOccupation': 'Pekerja Swasta', 
        'femaleMotherAddress': 'Jepang', 
        'witnessOneFamilyName': 'Tachibana', 
        'witnessOneShortName': 'Hina', 
        'witnessOneBirthday': '06/04/1991', 
        'witnessOneReligion': 'Buddha', 
        'witnessOneOccupation': 'Pekerja Swasta', 
        'witnessOneAddress': 'Jepang', 
        'witnessTwoFamilyName': 'Mikimoto', 
        'witnessTwoShortName': 'Jou', 
        'witnessTwoBirthday': '13/09/1977', 
        'witnessTwoReligion': 'Buddha', 
        'witnessTwoOccupation': 'Koki', 
        'witnessTwoAddress': 'Jepang'}

@app.route('/api/form/', methods=['GET', 'POST'])
def form():
    if request.method == 'POST':
        if not request.json:
            abort(400)
        print(request.json)
        return jsonify({'form': request.json}), 201
    return jsonify({'form': [FORM, FORM, FORM, FORM, FORM]}), 200
  