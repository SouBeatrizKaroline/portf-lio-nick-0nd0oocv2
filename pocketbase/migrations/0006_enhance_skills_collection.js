migrate(
  (app) => {
    var col = app.findCollectionByNameOrId('skills')

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
  },
  (app) => {
    var col = app.findCollectionByNameOrId('skills')
    var remove = [
      'categories',
      'description_pt',
      'description_en',
      'description_es',
      'tags',
      'icon',
    ]
    for (var i = 0; i < remove.length; i++) {
      var f = col.fields.getByName(remove[i])
      if (f) col.fields.remove(f)
    }
    app.save(col)
  },
)
