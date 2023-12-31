const Realm = require('realm')

const TestSchema = {
    name: "Test",
    properties: {
        _id: { type: 'objectId', default: () => new Realm.BSON.ObjectId(),indexed: true },
        createdAt: {type: "date", default: new Date()},
        count_1: {type: "int", default:0},
    },
    primaryKey: "_id"
}

Realm.open({
    schema: [TestSchema],
    schemaVersion: 0,
}).then((realm)=>{
    realm.write(()=>{
        realm.create('Test', {
            count: 1
        })
    })

    setTimeout(()=>{
        realm.write(()=>{
            realm.create('Test', {
                count: 2
            })
        })
        process.exit(0)
    },5000)

    console.log('here')
})