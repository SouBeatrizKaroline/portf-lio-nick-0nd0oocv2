migrate(
  (app) => {
    try {
      var col = app.findCollectionByNameOrId('skills')
      if (col) {
        var records = app.findRecordsByFilter('skills', "id != ''", 'order', 100, 0)
        for (var i = 0; i < records.length; i++) {
          var rec = records[i]
          if (!rec.get('level')) {
            rec.set('level', 85)
            app.save(rec)
          }
        }
      }
    } catch (err) {
      console.log('Migration 0005 warning: ' + String(err))
    }
  },
  (app) => {},
)
