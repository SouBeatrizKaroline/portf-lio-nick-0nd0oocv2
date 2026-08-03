migrate(
  (app) => {
    var col = app.findCollectionByNameOrId('projects')

    var newFields = [
      { name: 'problem_pt', type: 'text' },
      { name: 'problem_en', type: 'text' },
      { name: 'problem_es', type: 'text' },
      { name: 'solution_pt', type: 'text' },
      { name: 'solution_en', type: 'text' },
      { name: 'solution_es', type: 'text' },
      { name: 'project_role_pt', type: 'text' },
      { name: 'project_role_en', type: 'text' },
      { name: 'project_role_es', type: 'text' },
      { name: 'impact_pt', type: 'text' },
      { name: 'impact_en', type: 'text' },
      { name: 'impact_es', type: 'text' },
      { name: 'awards', type: 'json' },
      { name: 'client', type: 'text' },
      { name: 'duration', type: 'text' },
      { name: 'team_size', type: 'text' },
    ]

    for (var i = 0; i < newFields.length; i++) {
      var f = newFields[i]
      if (!col.fields.getByName(f.name)) {
        if (f.type === 'text') {
          col.fields.add(new TextField({ name: f.name }))
        } else if (f.type === 'json') {
          col.fields.add(new JSONField({ name: f.name }))
        }
      }
    }

    app.save(col)
  },
  (app) => {
    var col = app.findCollectionByNameOrId('projects')
    var fieldNames = [
      'problem_pt',
      'problem_en',
      'problem_es',
      'solution_pt',
      'solution_en',
      'solution_es',
      'project_role_pt',
      'project_role_en',
      'project_role_es',
      'impact_pt',
      'impact_en',
      'impact_es',
      'awards',
      'client',
      'duration',
      'team_size',
    ]
    for (var i = 0; i < fieldNames.length; i++) {
      var field = col.fields.getByName(fieldNames[i])
      if (field) col.fields.remove(field)
    }
    app.save(col)
  },
)
