migrate(
  (app) => {
    if (app.hasTable('itch_games')) return

    const collection = new Collection({
      name: 'itch_games',
      type: 'base',
      listRule: '',
      viewRule: '',
      createRule: null,
      updateRule: null,
      deleteRule: null,
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description_pt', type: 'text' },
        { name: 'description_en', type: 'text' },
        { name: 'description_es', type: 'text' },
        {
          name: 'cover_image',
          type: 'file',
          maxSelect: 1,
          maxSize: 5242880,
          mimeTypes: ['image/jpeg', 'image/png', 'image/webp'],
        },
        { name: 'itch_url', type: 'text' },
        { name: 'project_url', type: 'text' },
        { name: 'tech', type: 'json' },
        { name: 'order', type: 'number' },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
      indexes: ['CREATE INDEX idx_itch_games_order ON itch_games ("order")'],
    })
    app.save(collection)

    var col = app.findCollectionByNameOrId('itch_games')
    var seeds = [
      {
        title: 'Shadow Nexus',
        description_pt:
          'Um action-platformer 2D com mecanicas de luz e sombra. Desenvolvido em Unity com URP, State Machine e sistema de combate fluido.',
        description_en:
          'A 2D action-platformer with light and shadow mechanics. Built in Unity with URP, State Machine, and fluid combat system.',
        description_es:
          'Un action-platformer 2D con mecanicas de luz y sombra. Desarrollado en Unity con URP, State Machine y sistema de combate fluido.',
        itch_url: 'https://pls-nick.itch.io/shadow-nexus',
        project_url: '/project/metroidvania',
        tech: ['Unity', 'C#', 'URP', 'State Machine', '2D'],
        order: 1,
      },
      {
        title: 'Pixel Spellcraft',
        description_pt:
          'Jogo de puzzle e feiticos com combinacoes magicas. Particulas, animacoes e sistema de crafting de spells em Unity.',
        description_en:
          'Puzzle game with spell combinations and magical crafting. Particles, animations, and spell crafting system in Unity.',
        description_es:
          'Juego de puzzle y hechizos con combinaciones magicas. Particulas, animaciones y sistema de crafting en Unity.',
        itch_url: 'https://pls-nick.itch.io/pixel-spellcraft',
        project_url: '',
        tech: ['Unity', 'C#', 'Particles', 'Puzzle'],
        order: 2,
      },
      {
        title: 'Neon Drift',
        description_pt:
          'Corrida arcade WebGL com estetica synthwave. Otimizado para navegadores com carregamento rapido e fisica arcade responsiva.',
        description_en:
          'Arcade WebGL racing game with synthwave aesthetics. Optimized for browsers with fast loading and responsive arcade physics.',
        description_es:
          'Carrera arcade WebGL con estetica synthwave. Optimizado para navegadores con carga rapida y fisica arcade responsiva.',
        itch_url: 'https://pls-nick.itch.io/neon-drift',
        project_url: '',
        tech: ['Unity', 'WebGL', 'C#', 'Mobile'],
        order: 3,
      },
    ]

    for (var i = 0; i < seeds.length; i++) {
      var item = seeds[i]
      try {
        app.findFirstRecordByData('itch_games', 'title', item.title)
      } catch (_) {
        var r = new Record(col)
        var keys = Object.keys(item)
        for (var j = 0; j < keys.length; j++) {
          r.set(keys[j], item[keys[j]])
        }
        app.save(r)
      }
    }
  },
  (app) => {
    try {
      var col = app.findCollectionByNameOrId('itch_games')
      app.delete(col)
    } catch (_) {}
  },
)
