export const ROLES = {
  PASSPORT_SCOPE: {
    'Root': 'Root',
    'Director': 'Director',
    'Supervisor': 'Supervisor',
    'Administrator': 'Administrator',
    'Doctor': 'Doctor',
    'MedicalRepresentative': 'MedicalRepresentative',
  },
  ID: {
    'Root': 1,
    'Director': 2,
    'Supervisor': 3,
    'Administrator': 4,
    'Doctor': 5,
    'MedicalRepresentative': 6,
  },
};

export const PAGINATION = {
  'TotalVisible': 7,
};

export const MASK_PHONE = '8 (###) ###-##-##';

export const PASSPORT_TYPE = {
  oldNumberPassport: 0,
  newNumberPassport: 1,
};

export const SEX_TYPE = {
  Man: 1,
  Woman: 0,
};

export const CONSTANTS = {
  DescriptionTextUser: 500,
}

export const TEXT_EDITOR_TOOLBAR_USER = [
  ["bold", "italic", "underline", "strike"],
  [{
    align: ""
  }, {
    align: "center"
  }, {
    align: "right"
  }, {
    align: "justify"
  }],
  [{
    list: "ordered"
  }, {
    list: "bullet"
  }, {
    list: "check"
  }], [{
    indent: "-1"
  }, {
    indent: "+1"
  }], // outdent/indent
  [{
    color: []
  }],
  ["link"], ["clean"] // remove formatting button
]

export const FIELDS_FOR_I18N = {
  'first_name': 'FirstName',
  'second_name': 'SecondName',
  'patronymic': 'Patronymic',
  'birthday': 'Birthday',
  'sex' : 'Sex',
  'email': 'Email',
  'phone_format': 'NumberMobPhone',
  'additional_phone_format': 'AdditionalPhone',
  'inn_code': 'InnCode',
  'type_passport' : 'PassportType',
  'passport': 'Passport',
  'image': 'Image',
}
