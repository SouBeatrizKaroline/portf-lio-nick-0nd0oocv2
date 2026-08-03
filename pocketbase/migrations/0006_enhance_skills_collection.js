migrate(
  (app) => {
    try {
      var col = app.findCollectionByNameOrId('skills')

      var oldRecords = app.findRecordsByFilter('skills', "id != ''", '', 200, 0)
      for (var i = 0; i < oldRecords.length; i++) {
        app.delete(oldRecords[i])
      }

      var oldCat = col.fields.getByName('category')
      if (oldCat) col.fields.remove(oldCat)
      col.fields.add(
        new SelectField({
          name: 'category',
          required: true,
          values: [
            'gameplay',
            'backend',
            'languages',
            'engines',
            'frameworks',
            'tools',
            'versioning',
            'game_dev',
          ],
          maxSelect: 1,
        }),
      )

      if (!col.fields.getByName('categories')) {
        col.fields.add(new JSONField({ name: 'categories' }))
      }
      if (!col.fields.getByName('description_pt')) {
        col.fields.add(new TextField({ name: 'description_pt' }))
      }
      if (!col.fields.getByName('description_en')) {
        col.fields.add(new TextField({ name: 'description_en' }))
      }
      if (!col.fields.getByName('description_es')) {
        col.fields.add(new TextField({ name: 'description_es' }))
      }
      if (!col.fields.getByName('tags')) {
        col.fields.add(new JSONField({ name: 'tags' }))
      }
      if (!col.fields.getByName('icon')) {
        col.fields.add(new TextField({ name: 'icon' }))
      }

      app.save(col)
    } catch (err) {
      console.log('Migration 0006 error: ' + String(err))
    }
  },
  (app) => {
    try {
      var col = app.findCollectionByNameOrId('skills')
      var cat = col.fields.getByName('category')
      if (cat) col.fields.remove(cat)
      col.fields.add(
        new SelectField({
          name: 'category',
          required: true,
          values: [
            'gameplay',
            'backend',
            'languages',
            'engines',
            'frameworks',
            'tools',
            'versioning',
          ],
          maxSelect: 1,
        }),
      )
      var newFields = [
        'categories',
        'description_pt',
        'description_en',
        'description_es',
        'tags',
        'icon',
      ]
      for (var i = 0; i < newFields.length; i++) {
        var f = col.fields.getByName(newFields[i])
        if (f) col.fields.remove(f)
      }
      app.save(col)
    } catch (_) {}
  },
)
