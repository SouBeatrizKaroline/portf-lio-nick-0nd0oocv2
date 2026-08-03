migrate((app) => {
  try {
    const users = app.findCollectionByNameOrId('_pb_users_auth_')
    try {
      app.findAuthRecordByEmail('_pb_users_auth_', '1aspiraqualquer@gmail.com')
    } catch (_) {
      const record = new Record(users)
      record.setEmail('1aspiraqualquer@gmail.com')
      record.setPassword('Skip@Pass')
      record.setVerified(true)
      record.set('name', 'Nicole Maira (Nick)')
      app.save(record)
    }
  } catch (err) {
    console.log('User seed error: ' + String(err))
  }

  function seedCollection(name, keyField, seeds) {
    if (!app.hasTable(name)) {
      console.log('Skipping seed for ' + name + ': collection not found')
      return
    }
    try {
      var col = app.findCollectionByNameOrId(name)
      for (var i = 0; i < seeds.length; i++) {
        var item = seeds[i]
        try {
          app.findFirstRecordByData(name, keyField, item[keyField])
        } catch (_) {
          var r = new Record(col)
          var keys = Object.keys(item)
          for (var j = 0; j < keys.length; j++) {
            r.set(keys[j], item[keys[j]])
          }
          app.save(r)
        }
      }
    } catch (err) {
      console.log('Seed error for ' + name + ': ' + String(err))
    }
  }

  seedCollection('projects', 'slug', [
    {
      slug: 'metroidvania',
      title_pt: 'Projeto Metroidvania 2D',
      title_en: '2D Metroidvania Project',
      title_es: 'Proyecto Metroidvania 2D',
      subtitle_pt: 'Action-platformer fluido com arquitetura baseada em State Machine e URP',
      subtitle_en: 'Fluid action-platformer with State Machine architecture and URP',
      subtitle_es: 'Plataformas de acción fluido con arquitectura State Machine y URP',
      description_pt:
        'Jogo de plataforma 2D completo desenvolvido na Unity focando em movimentação responsiva, combate e iluminação 2D.',
      description_en:
        'Full 2D platformer game built in Unity focusing on responsive movement, tight combat and 2D lighting.',
      description_es:
        'Juego completo de plataformas 2D desarrollado en Unity enfocado en movimiento responsivo, combate y luces 2D.',
      content_pt:
        'Este projeto é um protótipo avançado de Metroidvania 2D com mecânicas completas de Player Controller: Dash, Wall Jump, Wall Slide, Jump Buffer e Coyote Time. Arquiteturado em State Machine modular para gerenciamento limpo de estados do personagem. Possui sistema de combate físico com Hitboxes/Hurtboxes, suporte a partículas, iluminação 2D URP e câmeras cinemáticas via Cinemachine.',
      content_en:
        'This project is an advanced 2D Metroidvania prototype with complete Player Controller mechanics: Dash, Wall Jump, Wall Slide, Jump Buffer, and Coyote Time. Built with a modular State Machine architecture for clean character state management. Features physical combat with Hitboxes/Hurtboxes, particle effects, 2D URP lighting, and dynamic Cinemachine cameras.',
      content_es:
        'Este proyecto es un prototipo avanzado de Metroidvania 2D con mecánicas completas de Player Controller: Dash, Wall Jump, Wall Slide, Jump Buffer y Coyote Time. Diseñado con arquitectura de State Machine modular. Incluye sistema de combate con Hitboxes/Hurtboxes, partículas, iluminación 2D URP y cámaras dinámicas Cinemachine.',
      category: 'game',
      tech: [
        'Unity',
        'C#',
        'URP',
        'State Machine',
        'Cinemachine',
        'Dash',
        'Wall Jump',
        'Wall Slide',
        'Jump Buffer',
        'Coyote Time',
        'Combat',
        'Particles',
        'Lighting',
      ],
      gallery: [
        'https://img.usecurling.com/p/800/450?q=metroidvania%20gameplay&color=purple',
        'https://img.usecurling.com/p/800/450?q=pixel%20art%20dungeon&color=blue',
      ],
      video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      github_url: 'https://github.com/nicolemaira/metroidvania-2d',
      itch_url: 'https://nicolemaira.itch.io/metroidvania-demo',
      demo_url: 'https://nicolemaira.itch.io/metroidvania-demo',
      featured: true,
      order: 1,
    },
    {
      slug: 'aspnet-mvc',
      title_pt: 'Sistema Web ASP.NET MVC',
      title_en: 'ASP.NET MVC Web System',
      title_es: 'Sistema Web ASP.NET MVC',
      subtitle_pt: 'Backend robusto com Entity Framework Core e SQL Server',
      subtitle_en: 'Robust backend with Entity Framework Core and SQL Server',
      subtitle_es: 'Backend robusto con Entity Framework Core y SQL Server',
      description_pt:
        'Aplicação Web de gerenciamento corporativo utilizando padrão MVC em C# .NET, ORM EF Core e Migrations.',
      description_en:
        'Enterprise web management application using C# .NET MVC pattern, EF Core ORM, and Migrations.',
      description_es:
        'Aplicación web de gestión empresarial usando patrón MVC C# .NET, ORM EF Core y Migrations.',
      content_pt:
        'Sistema completo desenvolvido para ambiente corporativo com autenticação segura, operações CRUD otimizadas, consultas LINQ complexas e arquitetura de dados escalável com SQL Server.',
      content_en:
        'Comprehensive enterprise system featuring secure authentication, optimized CRUD operations, complex LINQ queries, and scalable SQL Server data architecture.',
      content_es:
        'Sistema completo diseñado para entorno empresarial con autenticación segura, operaciones CRUD optimizadas, consultas LINQ complejas y arquitectura SQL Server.',
      category: 'backend',
      tech: [
        'ASP.NET Core',
        'C#',
        'Entity Framework',
        'SQL Server',
        'CRUD',
        'Migrations',
        'LINQ',
        'MVC',
      ],
      gallery: ['https://img.usecurling.com/p/800/450?q=code%20csharp%20backend&color=black'],
      github_url: 'https://github.com/nicolemaira/aspnet-management',
      featured: true,
      order: 2,
    },
    {
      slug: 'csharp-interpreter',
      title_pt: 'Interpretador e Lexer C#',
      title_en: 'C# Interpreter & Lexer',
      title_es: 'Interpretador y Lexer C#',
      subtitle_pt: 'Ferramenta de análise léxica e sintática customizada em C#',
      subtitle_en: 'Custom lexical and syntactic parser tool in C#',
      subtitle_es: 'Herramienta de análisis léxico y sintáctico personalizada en C#',
      description_pt:
        'Interpretador de linguagem customizada para scripts de jogos e avaliação de expressões em tempo de execução.',
      description_en:
        'Custom script interpreter for game scripting and runtime expression evaluation.',
      description_es:
        'Intérprete de lenguaje personalizado para scripts de juegos y evaluación de expresiones.',
      content_pt:
        'Desenvolvimento do zero de um Lexer, Parser e AST (Abstract Syntax Tree) para parsing e execução de fórmulas e comandos dentro de sistemas de jogos.',
      content_en:
        'Built from scratch including a Lexer, Parser, and AST (Abstract Syntax Tree) to parse and execute math formulas and game triggers dynamically.',
      content_es:
        'Desarrollado desde cero con Lexer, Parser y AST (Abstract Syntax Tree) para analizar y ejecutar fórmulas y activadores de juegos en tiempo real.',
      category: 'tool',
      tech: ['C#', '.NET', 'Compilers', 'AST', 'Lexer', 'Parser', 'Algorithms'],
      gallery: ['https://img.usecurling.com/p/800/450?q=terminal%20matrix%20code&color=green'],
      github_url: 'https://github.com/nicolemaira/csharp-interpreter',
      featured: true,
      order: 3,
    },
  ])

  seedCollection('experience', 'role_pt', [
    {
      role_pt: 'Unity Developer (Freelancer)',
      role_en: 'Unity Developer (Freelance)',
      role_es: 'Unity Developer (Freelance)',
      company: 'Projeto Confidencial',
      period: 'Mar 2024 — Abr 2025',
      description_pt:
        'Desenvolvimento de jogo WebGL & Mobile em Unity. Integração de sistemas de autenticação no backend, cloud save, otimização de performance para navegadores e UI responsiva.',
      description_en:
        'Development of WebGL & Mobile game in Unity. Integration of backend authentication systems, cloud save, browser performance optimization and responsive UI.',
      description_es:
        'Desarrollo de juego WebGL & Mobile en Unity. Integración de autenticación backend, guardado en la nube, optimización para navegadores y UI responsiva.',
      tags: [
        'WebGL',
        'Unity',
        'Backend',
        'Frontend',
        'Authentication',
        'Cloud Save',
        'Mobile',
        'Performance',
        'Browser Optimization',
      ],
      order: 1,
    },
    {
      role_pt: 'Programadora Trainee',
      role_en: 'Trainee Programmer',
      role_es: 'Programadora Trainee',
      company: 'Capgemini',
      period: '2018 — 2020',
      description_pt:
        'Treinamento e atuação em desenvolvimento corporativo, lógica de programação em Java, modelagem de banco de dados relacional e conceitos de ABAP.',
      description_en:
        'Training and performance in enterprise development, Java programming logic, relational database modeling and ABAP fundamentals.',
      description_es:
        'Capacitación y desempeño en desarrollo empresarial, lógica de programación en Java, modelado de bases de datos relacionales y fundamentos de ABAP.',
      tags: ['Java', 'Banco de Dados', 'SQL', 'ABAP', 'OOP'],
      order: 2,
    },
  ])

  seedCollection('timeline', 'year', [
    {
      year: '2018',
      title_pt: 'Início na Capgemini',
      title_en: 'Started at Capgemini',
      title_es: 'Inicio en Capgemini',
      description_pt: 'Entrada na área de tecnologia como Programadora Trainee.',
      description_en: 'Entered tech field as a Trainee Programmer.',
      description_es: 'Entrada al área de tecnología como Programadora Trainee.',
      order: 1,
    },
    {
      year: '2021',
      title_pt: 'Aprofundamento na Unity',
      title_en: 'Deep Dive into Unity',
      title_es: 'Especialización en Unity',
      description_pt: 'Foco intensivo em desenvolvimento de jogos digitais e C#.',
      description_en: 'Intensive focus on game dev and C#.',
      description_es: 'Enfoque intensivo en desarrollo de videojuegos y C#.',
      order: 2,
    },
    {
      year: '2022',
      title_pt: 'Graduação ADS',
      title_en: 'Graduated in Software Dev',
      title_es: 'Graduación en Análisis de Sistemas',
      description_pt: 'Formação em Análise e Desenvolvimento de Sistemas.',
      description_en: 'Graduated in Systems Analysis and Development.',
      description_es: 'Graduación en Análisis y Desarrollo de Sistemas.',
      order: 3,
    },
    {
      year: '2023',
      title_pt: 'Unity Combat & Game Architecture',
      title_en: 'Unity Combat & Architecture',
      title_es: 'Combate y Arquitectura Unity',
      description_pt: 'Cursos avançados na GameDev.tv e projetos autorais.',
      description_en: 'Advanced courses on GameDev.tv and personal projects.',
      description_es: 'Cursos avanzados en GameDev.tv y proyectos propios.',
      order: 4,
    },
    {
      year: '2024',
      title_pt: 'Freelance Unity Dev',
      title_en: 'Freelance Unity Dev',
      title_es: 'Freelance Unity Dev',
      description_pt: 'Desenvolvimento de projeto comercial WebGL/Mobile.',
      description_en: 'Commercial WebGL/Mobile game project.',
      description_es: 'Desarrollo de proyecto comercial WebGL/Mobile.',
      order: 5,
    },
    {
      year: '2025',
      title_pt: 'Projetos & Portfólio Interativo',
      title_en: 'Projects & Interactive Portfolio',
      title_es: 'Proyectos y Portafolio Interactivo',
      description_pt: 'Lançamento de protótipos de jogos, sistemas e arquitetura C#.',
      description_en: 'Release of game prototypes, C# architecture & systems.',
      description_es: 'Lanzamiento de prototipos, sistemas y arquitectura C#.',
      order: 6,
    },
    {
      year: '2026+',
      title_pt: 'Próximo Desafio...',
      title_en: 'Next Challenge...',
      title_es: 'Próximo Desafío...',
      description_pt: 'Pronta para criar grandes experiências em estúdios de jogos!',
      description_en: 'Ready to craft epic experiences in game studios!',
      description_es: '¡Lista para crear grandes experiencias en estudios de videojuegos!',
      order: 7,
    },
  ])

  seedCollection('skills', 'name_pt', [
    {
      category: 'gameplay',
      name_pt: 'Player Controller 2D/3D',
      name_en: '2D/3D Player Controller',
      name_es: 'Player Controller 2D/3D',
      level: 95,
      order: 1,
    },
    {
      category: 'gameplay',
      name_pt: 'State Machine Modular',
      name_en: 'Modular State Machine',
      name_es: 'State Machine Modular',
      level: 90,
      order: 2,
    },
    {
      category: 'gameplay',
      name_pt: 'Sistemas de Combate & Hitboxes',
      name_en: 'Combat Systems & Hitboxes',
      name_es: 'Sistemas de Combates y Hitboxes',
      level: 88,
      order: 3,
    },
    {
      category: 'backend',
      name_pt: 'ASP.NET Core & C#',
      name_en: 'ASP.NET Core & C#',
      name_es: 'ASP.NET Core y C#',
      level: 85,
      order: 4,
    },
    {
      category: 'backend',
      name_pt: 'Entity Framework & SQL',
      name_en: 'Entity Framework & SQL',
      name_es: 'Entity Framework y SQL',
      level: 82,
      order: 5,
    },
    { category: 'languages', name_pt: 'C#', name_en: 'C#', name_es: 'C#', level: 92, order: 6 },
    {
      category: 'languages',
      name_pt: 'Java',
      name_en: 'Java',
      name_es: 'Java',
      level: 75,
      order: 7,
    },
    {
      category: 'languages',
      name_pt: 'TypeScript / JS',
      name_en: 'TypeScript / JS',
      name_es: 'TypeScript / JS',
      level: 80,
      order: 8,
    },
    {
      category: 'engines',
      name_pt: 'Unity 2D / 3D / URP',
      name_en: 'Unity 2D / 3D / URP',
      name_es: 'Unity 2D / 3D / URP',
      level: 90,
      order: 9,
    },
    {
      category: 'tools',
      name_pt: 'Cinemachine & Particle System',
      name_en: 'Cinemachine & Particle System',
      name_es: 'Cinemachine y Partículas',
      level: 88,
      order: 10,
    },
    {
      category: 'versioning',
      name_pt: 'Git & GitHub',
      name_en: 'Git & GitHub',
      name_es: 'Git y GitHub',
      level: 90,
      order: 11,
    },
  ])

  seedCollection('stack', 'category', [
    {
      category: 'Game Development',
      items: [
        'Unity 2D/3D',
        'C# Gameplay',
        'State Machine',
        'Cinemachine',
        'URP Pipeline',
        'Tilemaps',
        '2D Physics',
        'Input System',
      ],
      order: 1,
    },
    {
      category: 'Backend',
      items: [
        'ASP.NET Core',
        'Entity Framework Core',
        'SQL Server',
        'REST APIs',
        'Cloud Save',
        'LINQ',
      ],
      order: 2,
    },
    {
      category: 'Programming Languages',
      items: ['C#', 'Java', 'TypeScript', 'JavaScript', 'SQL', 'C++ Basic'],
      order: 3,
    },
    {
      category: 'Engines & Tools',
      items: ['Unity Engine', 'Visual Studio', 'VS Code', 'Rider', 'Aseprite', 'Itch.io'],
      order: 4,
    },
    {
      category: 'Versionamento',
      items: ['Git', 'GitHub', 'Git LFS', 'Conventional Commits'],
      order: 5,
    },
  ])

  seedCollection('certificates', 'title', [
    {
      title: 'Unity 2D Game Development Masterclass',
      issuer: 'GameDev.tv',
      year: '2023',
      category: 'gamedev',
      link: 'https://gamedev.tv',
      order: 1,
    },
    {
      title: 'C# RPG Combat & State Machine Systems',
      issuer: 'Udemy',
      year: '2023',
      category: 'udemy',
      link: 'https://udemy.com',
      order: 2,
    },
    {
      title: 'Unity Certified User: Programmer',
      issuer: 'Unity Technologies',
      year: '2022',
      category: 'unitytech',
      link: 'https://unity.com',
      order: 3,
    },
    {
      title: 'ASP.NET Core MVC & Entity Framework',
      issuer: 'Udemy',
      year: '2022',
      category: 'udemy',
      link: 'https://udemy.com',
      order: 4,
    },
  ])

  seedCollection('game_systems', 'title_pt', [
    {
      title_pt: 'Gameplay Programming',
      title_en: 'Gameplay Programming',
      title_es: 'Programación Gameplay',
      description_pt: 'Física responsiva, controles precisos e feeling mecânico de primeira.',
      description_en: 'Responsive physics, tight controls and top-tier game feel.',
      description_es: 'Física responsiva, controles precisos y feeling mecánico de primera.',
      icon: 'Gamepad2',
      order: 1,
    },
    {
      title_pt: 'Game Architecture',
      title_en: 'Game Architecture',
      title_es: 'Arquitectura de Juegos',
      description_pt:
        'Sistemas desacoplados, ScriptableObjects, Event Channels e relatórios assíncronos.',
      description_en: 'Decoupled systems, ScriptableObjects, Event Channels and async handlers.',
      description_es:
        'Sistemas desacoplados, ScriptableObjects, Event Channels y controladores asíncronos.',
      icon: 'Cpu',
      order: 2,
    },
    {
      title_pt: 'Combat Systems',
      title_en: 'Combat Systems',
      title_es: 'Sistemas de Combate',
      description_pt:
        'Hitboxes/Hurtboxes precisas, Hitstop, Camera Shake e reações físicas a dano.',
      description_en: 'Precise Hitboxes/Hurtboxes, Hitstop, Camera Shake, and impact response.',
      description_es: 'Hitboxes/Hurtboxes precisas, Hitstop, Shake de Cámara y reacción a impacto.',
      icon: 'Swords',
      order: 3,
    },
    {
      title_pt: 'AI & Behavior Trees',
      title_en: 'AI & Behavior Trees',
      title_es: 'IA y Behavior Trees',
      description_pt: 'Inimigos inteligentes usando FSM, NavMesh 2D/3D e Behavior Trees.',
      description_en: 'Smart enemies using FSM, 2D/3D NavMesh, and Behavior Trees.',
      description_es: 'Enemigos inteligentes con FSM, NavMesh 2D/3D y Behavior Trees.',
      icon: 'Bot',
      order: 4,
    },
    {
      title_pt: 'Player Controller',
      title_en: 'Player Controller',
      title_es: 'Player Controller',
      description_pt:
        'Coyote Time, Jump Buffer, Variable Jump Height, Dash com Invencibilidade e Wall Slide.',
      description_en:
        'Coyote Time, Jump Buffer, Variable Jump Height, Invincible Dash & Wall Slide.',
      description_es:
        'Coyote Time, Jump Buffer, Salto Variable, Dash con Invencibilidad y Wall Slide.',
      icon: 'Zap',
      order: 5,
    },
    {
      title_pt: 'UI & Inventory',
      title_en: 'UI & Inventory',
      title_es: 'UI y Inventario',
      description_pt:
        'Interfaces responsivas com UI Toolkit / UGUI e sistemas de inventário por slots.',
      description_en: 'Responsive UI with UI Toolkit / UGUI and slot/grid inventory systems.',
      description_es: 'UI responsiva con UI Toolkit / UGU y sistemas de inventario por slots.',
      icon: 'LayoutGrid',
      order: 6,
    },
  ])

  seedCollection('game_jam', 'title', [
    {
      title: 'Shadow Dash - Global Game Jam 2024',
      year: '2024',
      description_pt:
        'Jogo feito em 48 horas focado em mecânica de luz e sombra. Programação de gameplay e física em Unity.',
      description_en:
        'Game crafted in 48 hours centered around light and shadow mechanics. Gameplay & physics in Unity.',
      description_es:
        'Juego creado en 48 horas centrado en mecánica de luz y sombra. Programación gameplay y física en Unity.',
      images: ['https://img.usecurling.com/p/600/350?q=pixel%20art%20shadow%20game&color=purple'],
      links: [{ label: 'Itch.io Page', url: 'https://nicolemaira.itch.io' }],
      order: 1,
    },
    {
      title: 'Pixel Spellcraft - GMTK Game Jam',
      year: '2023',
      description_pt:
        'Jogo de puzzle e feitiços combinações. Programação de regras de jogo e animações.',
      description_en:
        'Spell crafting puzzle game. Programmed rules, spell combinations and particle FX.',
      description_es:
        'Juego de acertijos y hechizos. Programación de reglas, combinaciones de hechizos y partículas.',
      images: ['https://img.usecurling.com/p/600/350?q=retro%20magic%20pixel&color=blue'],
      links: [{ label: 'Itch.io Page', url: 'https://nicolemaira.itch.io' }],
      order: 2,
    },
  ])
})
