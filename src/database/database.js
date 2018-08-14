import Realm from "realm";
export const COMPANY_SCHEMA = 'Company'
export const CHECKLIST_SCHEMA = 'Checklist'
export const REMARKS_SCHEMA = 'Remarks'

export const companySchema = {
    name:COMPANY_SCHEMA,
    primaryKey:'id',
    properties: {
        id:'int',
        companyName: 'string',
        companyOwner: 'string',
        ownerContactNumber: 'string',
        companyAddress: 'string',
    }
}

const databaseOptions = {
    path:'SanitaryChecklist.realm',
    schema: [companySchema],
    schemaVersion: 0
}

export const insertNewCompany = newCompany => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            realm.create(COMPANY_SCHEMA,newCompany);
            resolve(newCompany)
        })
    }).catch((error) => reject(error))
})

export const updateCompany = company => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            let updatedCompany = realm.objectForPrimaryKey(COMPANY_SCHEMA, company.id)
            updatedCompany.companyName = company.companyName
            updateCompany.companyOwner = company.companyOwner
            updateCompany.companyAddress = company.companyAddress
            updateCompany.ownerContactNumber = company.ownerContactNumber

            resolve()
        })
    }).catch((error) => reject(error))
})

export const deleteCompany = company => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            let deletedCompany = realm.objectForPrimaryKey(COMPANY_SCHEMA, company.id)
            realm.delete(deletedCompany)

            resolve()
        })
    }).catch((error) => reject(error))
})

export const selectAllCompany = () => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            let allCompany = realm.objects(COMPANY_SCHEMA)

            resolve(allCompany)
        })
    }).catch((error) => reject(error))
})

export default new Realm(databaseOptions)

