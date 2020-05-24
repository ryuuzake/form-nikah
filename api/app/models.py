from app import db

class Form(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.String(100))
    location = db.Column(db.String(100))
    nationality = db.Column(db.String(100))
    maleFamilyName = db.Column(db.String(100))
    maleShortName = db.Column(db.String(100))
    maleBirthday = db.Column(db.String(100))
    maleReligion = db.Column(db.String(100))
    maleOccupation = db.Column(db.String(100))
    maleAddress = db.Column(db.String(100))
    maleMarried = db.Column(db.String(100))
    maleExName = db.Column(db.String(100))
    maleChildName = db.Column(db.String(100))
    maleFatherFamilyName = db.Column(db.String(100))
    maleFatherShortName = db.Column(db.String(100))
    maleFatherBirthday = db.Column(db.String(100))
    maleFatherReligion = db.Column(db.String(100))
    maleFatherOccupation = db.Column(db.String(100))
    maleFatherAddress = db.Column(db.String(100))
    maleMotherFamilyName = db.Column(db.String(100))
    maleMotherShortName = db.Column(db.String(100))
    maleMotherBirthday = db.Column(db.String(100))
    maleMotherReligion = db.Column(db.String(100))
    maleMotherOccupation = db.Column(db.String(100))
    maleMotherAddress = db.Column(db.String(100))
    femaleFamilyName = db.Column(db.String(100))
    femaleShortName = db.Column(db.String(100))
    femaleBirthday = db.Column(db.String(100))
    femaleReligion = db.Column(db.String(100))
    femaleOccupation = db.Column(db.String(100))
    femaleAddress = db.Column(db.String(100))
    femaleMarri = db.Column(db.String(100))
    femaleExName = db.Column(db.String(100))
    femaleChildName = db.Column(db.String(100))
    femaleFatherFamilyName = db.Column(db.String(100))
    femaleFatherShortName = db.Column(db.String(100))
    femaleFatherBirthday = db.Column(db.String(100))
    femaleFatherReligion = db.Column(db.String(100))
    femaleFatherOccupation = db.Column(db.String(100))
    femaleFatherAddress = db.Column(db.String(100))
    femaleMotherFamilyName = db.Column(db.String(100))
    femaleMotherShortName = db.Column(db.String(100))
    femaleMotherBirthday = db.Column(db.String(100))
    femaleMotherReligion = db.Column(db.String(100))
    femaleMotherOccupation = db.Column(db.String(100))
    femaleMotherAddress = db.Column(db.String(100))
    witnessOneFamilyName = db.Column(db.String(100))
    witnessOneShortName = db.Column(db.String(100))
    witnessOneBirthday = db.Column(db.String(100))
    witnessOneReligion = db.Column(db.String(100))
    witnessOneOccupation = db.Column(db.String(100))
    witnessOneAddress = db.Column(db.String(100))
    witnessTwoFamilyName = db.Column(db.String(100))
    witnessTwoShortName = db.Column(db.String(100))
    witnessTwoBirthday = db.Column(db.String(100))
    witnessTwoReligion = db.Column(db.String(100))
    witnessTwoOccupation = db.Column(db.String(100))
    witnessTwoAddress = db.Column(db.String(100))

    def __repr__(self):
        return '<Form {}>'.format(self.id)

    def to_dict(self):
        data = {
            'id': self.id,
            'date': self.date,
            'location': self.location,
            'nationality': self.nationality,
            'maleFamilyName': self.maleFamilyName,
            'maleShortName': self.maleShortName,
            'maleBirthday': self.maleBirthday,
            'maleReligion': self.maleReligion,
            'maleOccupation': self.maleOccupation,
            'maleAddress': self.maleAddress,
            'maleMarried': self.maleMarried,
            'maleExName': self.maleExName,
            'maleChildName': self.maleChildName,
            'maleFatherFamilyName': self.maleFatherFamilyName,
            'maleFatherShortName': self.maleFatherShortName,
            'maleFatherBirthday': self.maleFatherBirthday,
            'maleFatherReligion': self.maleFatherReligion,
            'maleFatherOccupation': self.maleFatherOccupation,
            'maleFatherAddress': self.maleFatherAddress,
            'maleMotherFamilyName': self.maleMotherFamilyName,
            'maleMotherShortName': self.maleMotherShortName,
            'maleMotherBirthday': self.maleMotherBirthday,
            'maleMotherReligion': self.maleMotherReligion,
            'maleMotherOccupation': self.maleMotherOccupation,
            'maleMotherAddress': self.maleMotherAddress,
            'femaleFamilyName': self.femaleFamilyName,
            'femaleShortName': self.femaleShortName,
            'femaleBirthday': self.femaleBirthday,
            'femaleReligion': self.femaleReligion,
            'femaleOccupation': self.femaleOccupation,
            'femaleAddress': self.femaleAddress,
            'femaleMarri': self.femaleMarri,
            'femaleExName': self.femaleExName,
            'femaleChildName': self.femaleChildName,
            'femaleFatherFamilyName': self.femaleFatherFamilyName,
            'femaleFatherShortName': self.femaleFatherShortName,
            'femaleFatherBirthday': self.femaleFatherBirthday,
            'femaleFatherReligion': self.femaleFatherReligion,
            'femaleFatherOccupation': self.femaleFatherOccupation,
            'femaleFatherAddress': self.femaleFatherAddress,
            'femaleMotherFamilyName': self.femaleMotherFamilyName,
            'femaleMotherShortName': self.femaleMotherShortName,
            'femaleMotherBirthday': self.femaleMotherBirthday,
            'femaleMotherReligion': self.femaleMotherReligion,
            'femaleMotherOccupation': self.femaleMotherOccupation,
            'femaleMotherAddress': self.femaleMotherAddress,
            'witnessOneFamilyName': self.witnessOneFamilyName,
            'witnessOneShortName': self.witnessOneShortName,
            'witnessOneBirthday': self.witnessOneBirthday,
            'witnessOneReligion': self.witnessOneReligion,
            'witnessOneOccupation': self.witnessOneOccupation,
            'witnessOneAddress': self.witnessOneAddress,
            'witnessTwoFamilyName': self.witnessTwoFamilyName,
            'witnessTwoShortName': self.witnessTwoShortName,
            'witnessTwoBirthday': self.witnessTwoBirthday,
            'witnessTwoReligion': self.witnessTwoReligion,
            'witnessTwoOccupation': self.witnessTwoOccupation,
            'witnessTwoAddress': self.witnessTwoAddress,
        }
        return data

    def from_dict(self, data):
        for field in data:
            setattr(self, field, data[field])
