migrate(
  (app) => {
    if (!app.hasTable('skills')) return

    try {
      var old = app.findRecordsByFilter('skills', "id != ''", '', 200, 0)
      for (var i = 0; i < old.length; i++) app.delete(old[i])
    } catch (_) {}

    var col = app.findCollectionByNameOrId('skills')

    function sk(npt, nen, nes, dpt, den, des, lv, cats, tags, icon, ord) {
      try {
        app.findFirstRecordByData('skills', 'name_en', nen)
        return
      } catch (_) {}
      var r = new Record(col)
      r.set('name_pt', npt)
      r.set('name_en', nen)
      r.set('name_es', nes)
      r.set('description_pt', dpt)
      r.set('description_en', den)
      r.set('description_es', des)
      r.set('level', lv)
      r.set('category', cats[0])
      r.set('categories', cats)
      r.set('tags', tags)
      r.set('icon', icon)
      r.set('order', ord)
      app.save(r)
    }

    sk(
      'Unity Engine',
      'Unity Engine',
      'Unity Engine',
      'Motor de jogos 2D/3D para experiências interativas',
      '2D/3D game engine for building interactive experiences',
      'Motor de juegos 2D/3D para experiencias interactivas',
      3,
      ['game_dev', 'engines'],
      ['Unity', '2D', '3D', 'Engine'],
      'unity',
      1,
    )
    sk(
      'Gameplay Programming',
      'Gameplay Programming',
      'Gameplay Programming',
      'Programação de mecânicas e sistemas de jogo',
      'Programming game mechanics and systems',
      'Programación de mecánicas y sistemas de juego',
      3,
      ['game_dev', 'gameplay'],
      ['C#', 'Unity', 'Game Design'],
      'gameplay',
      2,
    )
    sk(
      'Arquitetura de Games',
      'Game Architecture',
      'Arquitectura de Games',
      'Design de arquitetura escalável e modular para jogos',
      'Scalable modular game architecture design',
      'Diseño de arquitectura escalable y modular para juegos',
      2,
      ['game_dev'],
      ['ScriptableObjects', 'Event Channels', 'Modular'],
      'architecture',
      3,
    )
    sk(
      'Máquinas de Estado',
      'State Machines',
      'Máquinas de Estado',
      'Gerenciamento de estados do personagem e IA',
      'Character and AI state management',
      'Gestión de estados de personaje e IA',
      2,
      ['game_dev', 'gameplay'],
      ['FSM', 'Pattern', 'AI'],
      'state_machine',
      4,
    )
    sk(
      'Character Controller',
      'Character Controller',
      'Character Controller',
      'Controle preciso de movimento do personagem',
      'Precise character movement control',
      'Control preciso de movimiento del personaje',
      2,
      ['game_dev', 'gameplay'],
      ['Movement', 'Physics', 'Controller'],
      'character',
      5,
    )
    sk(
      'Sistemas de Combate',
      'Combat Systems',
      'Sistemas de Combate',
      'Sistemas de combate com hitboxes e hurtboxes',
      'Combat systems with hitboxes and hurtboxes',
      'Sistemas de combate con hitboxes y hurtboxes',
      2,
      ['game_dev', 'gameplay'],
      ['Hitbox', 'Hurtbox', 'Combat'],
      'combat',
      6,
    )
    sk(
      'Animação',
      'Animation',
      'Animación',
      'Animação de personagens e objetos no jogo',
      'Character and object animation in games',
      'Animación de personajes y objetos en juegos',
      2,
      ['game_dev'],
      ['Animation', 'Rigging', 'Unity'],
      'animation',
      7,
    )
    sk(
      'Animator',
      'Animator',
      'Animator',
      'Controle de fluxo de animações via Animator Controller',
      'Animation flow control via Animator Controller',
      'Control de flujo de animaciones vía Animator Controller',
      2,
      ['game_dev'],
      ['Animator Controller', 'Blend Tree', 'Unity'],
      'animator',
      8,
    )
    sk(
      'Cinemachine',
      'Cinemachine',
      'Cinemachine',
      'Sistema de câmeras cinematográficas dinâmicas',
      'Dynamic cinematic camera system',
      'Sistema de cámaras cinematográficas dinámicas',
      2,
      ['game_dev', 'frameworks'],
      ['Camera', 'Cinematic', 'Unity'],
      'cinemachine',
      9,
    )
    sk(
      'Sistema de Partículas',
      'Particle System',
      'Sistema de Partículas',
      'Criação de efeitos visuais com partículas',
      'Visual effects creation with particles',
      'Creación de efectos visuales con partículas',
      2,
      ['game_dev'],
      ['VFX', 'Particles', 'Unity'],
      'particle',
      10,
    )
    sk(
      'Universal Render Pipeline (URP)',
      'Universal Render Pipeline (URP)',
      'Universal Render Pipeline (URP)',
      'Pipeline de renderização otimizado para performance',
      'Optimized render pipeline for performance',
      'Pipeline de renderizado optimizado para rendimiento',
      2,
      ['game_dev'],
      ['Rendering', 'Shaders', 'Optimization'],
      'urp',
      11,
    )
    sk(
      'Física',
      'Physics',
      'Física',
      'Simulação de física realista em 2D e 3D',
      'Realistic physics simulation in 2D and 3D',
      'Simulación de física realista en 2D y 3D',
      2,
      ['game_dev'],
      ['2D Physics', '3D Physics', 'Rigidbody'],
      'physics',
      12,
    )
    sk(
      'Netcode for GameObjects',
      'Netcode for GameObjects',
      'Netcode for GameObjects',
      'Solução de multiplayer oficial da Unity',
      'Unity official multiplayer solution',
      'Solución multijugador oficial de Unity',
      1,
      ['game_dev', 'frameworks'],
      ['Multiplayer', 'Networking', 'Unity'],
      'netcode',
      13,
    )
    sk(
      'WebGL',
      'WebGL',
      'WebGL',
      'Exportação de jogos para navegadores web',
      'Game export to web browsers',
      'Exportación de juegos para navegadores web',
      2,
      ['game_dev'],
      ['Web', 'Browser', 'Export'],
      'webgl',
      14,
    )
    sk(
      'Desenvolvimento Mobile',
      'Mobile Development',
      'Desarrollo Mobile',
      'Desenvolvimento de jogos para iOS e Android',
      'Game development for iOS and Android',
      'Desarrollo de juegos para iOS y Android',
      2,
      ['game_dev'],
      ['iOS', 'Android', 'Touch'],
      'mobile',
      15,
    )
    sk(
      'Sistemas de Autenticação',
      'Authentication Systems',
      'Sistemas de Autenticación',
      'Integração de sistemas de login e autenticação',
      'Login and authentication system integration',
      'Integración de sistemas de login y autenticación',
      2,
      ['game_dev', 'backend'],
      ['Login', 'Security', 'Backend'],
      'auth',
      16,
    )
    sk(
      'Cloud Save',
      'Cloud Save',
      'Cloud Save',
      'Persistência de dados do jogador na nuvem',
      'Player data persistence in the cloud',
      'Persistencia de datos del jugador en la nube',
      2,
      ['game_dev', 'backend'],
      ['Cloud', 'Save Data', 'Backend'],
      'cloud',
      17,
    )
    sk(
      'Coyote Time',
      'Coyote Time',
      'Coyote Time',
      'Tolerância de tempo para pular após sair da plataforma',
      'Time tolerance for jumping after leaving platform',
      'Tolerancia de tiempo para saltar tras salir de plataforma',
      2,
      ['gameplay'],
      ['Game Feel', 'Platformer', 'Polish'],
      'coyote',
      18,
    )
    sk(
      'Jump Buffer',
      'Jump Buffer',
      'Jump Buffer',
      'Registro de input de pulo antes de aterrissar',
      'Jump input registration before landing',
      'Registro de input de salto antes de aterrizar',
      2,
      ['gameplay'],
      ['Game Feel', 'Input', 'Platformer'],
      'jump',
      19,
    )
    sk(
      'Wall Jump',
      'Wall Jump',
      'Wall Jump',
      'Pulo a partir de paredes com física precisa',
      'Wall-based jumping with precise physics',
      'Salto desde paredes con física precisa',
      2,
      ['gameplay'],
      ['Movement', 'Platformer', 'Physics'],
      'wall',
      20,
    )
    sk(
      'Wall Slide',
      'Wall Slide',
      'Wall Slide',
      'Deslização controlada em paredes',
      'Controlled wall sliding',
      'Deslizamiento controlado en paredes',
      2,
      ['gameplay'],
      ['Movement', 'Platformer', 'Physics'],
      'wall',
      21,
    )
    sk(
      'Dash',
      'Dash',
      'Dash',
      'Movimento de impulso rápido com invencibilidade',
      'Fast dash movement with invincibility',
      'Movimiento de impulso rápido con invencibilidad',
      2,
      ['gameplay'],
      ['Movement', 'i-frames', 'Action'],
      'dash',
      22,
    )
    sk(
      'Input System',
      'Input System',
      'Input System',
      'Sistema de input moderno e rebindable da Unity',
      'Unity modern rebindable input system',
      'Sistema de input moderno y rebindable de Unity',
      2,
      ['gameplay'],
      ['Input', 'Rebinding', 'Unity'],
      'input',
      23,
    )
    sk(
      'Game Feel',
      'Game Feel',
      'Game Feel',
      'Aprimoramento de sensação tátil do jogo',
      'Game feel and tactile sensation enhancement',
      'Mejora de la sensación táctil del juego',
      2,
      ['gameplay'],
      ['Polish', 'Feedback', 'Juice'],
      'feel',
      24,
    )
    sk(
      'Comportamento de Inimigos',
      'Enemy Behaviors',
      'Comportamiento de Enemigos',
      'IA de inimigos com FSM e NavMesh',
      'Enemy AI with FSM and NavMesh',
      'IA de enemigos con FSM y NavMesh',
      2,
      ['gameplay'],
      ['AI', 'NavMesh', 'FSM'],
      'enemy',
      25,
    )
    sk(
      'Sistemas de Câmera',
      'Camera Systems',
      'Sistemas de Cámara',
      'Sistemas de câmera dinâmicos e seguimento',
      'Dynamic camera systems and tracking',
      'Sistemas de cámara dinámicos y seguimiento',
      2,
      ['gameplay'],
      ['Camera', 'Cinemachine', 'Tracking'],
      'camera',
      26,
    )
    sk(
      'Detecção de Colisão',
      'Collision Detection',
      'Detección de Colisión',
      'Detecção de colisão precisa com raycasting',
      'Precise collision detection with raycasting',
      'Detección de colisión precisa con raycasting',
      2,
      ['gameplay'],
      ['Physics', 'Raycast', 'Precision'],
      'collision',
      27,
    )
    sk(
      'Sistemas de Checkpoint',
      'Checkpoint Systems',
      'Sistemas de Checkpoint',
      'Sistema de checkpoints e respawn',
      'Checkpoint and respawn system',
      'Sistema de checkpoints y respawn',
      2,
      ['gameplay'],
      ['Save', 'Respawn', 'Game Flow'],
      'checkpoint',
      28,
    )
    sk(
      'C#',
      'C#',
      'C#',
      'Linguagem principal para desenvolvimento em Unity e .NET',
      'Primary language for Unity and .NET development',
      'Lenguaje principal para desarrollo en Unity y .NET',
      3,
      ['languages'],
      ['.NET', 'Unity', 'OOP'],
      'csharp',
      29,
    )
    sk(
      'SQL',
      'SQL',
      'SQL',
      'Consultas e manipulação de bancos de dados relacionais',
      'Relational database queries and manipulation',
      'Consultas y manipulación de bases de datos relacionales',
      2,
      ['languages'],
      ['Database', 'Queries', 'Relational'],
      'sql',
      30,
    )
    sk(
      'HTML5',
      'HTML5',
      'HTML5',
      'Estrutura semântica para páginas web',
      'Semantic structure for web pages',
      'Estructura semántica para páginas web',
      1,
      ['languages'],
      ['Web', 'Semantic', 'Markup'],
      'html',
      31,
    )
    sk(
      'CSS3',
      'CSS3',
      'CSS3',
      'Estilização e layout responsivo para web',
      'Styling and responsive layout for web',
      'Estilización y diseño responsivo para web',
      1,
      ['languages'],
      ['Web', 'Styling', 'Responsive'],
      'css',
      32,
    )
    sk(
      'Java',
      'Java',
      'Java',
      'Programação orientada a objetos para enterprise',
      'Object-oriented programming for enterprise',
      'Programación orientada a objetos para enterprise',
      2,
      ['languages'],
      ['OOP', 'Enterprise', 'JVM'],
      'java',
      33,
    )
    sk(
      'JavaScript',
      'JavaScript',
      'JavaScript',
      'Linguagem dinâmica para web e interatividade',
      'Dynamic language for web and interactivity',
      'Lenguaje dinámico para web e interactividad',
      2,
      ['languages'],
      ['Web', 'Dynamic', 'ES6'],
      'javascript',
      34,
    )
    sk(
      'ASP.NET MVC',
      'ASP.NET MVC',
      'ASP.NET MVC',
      'Framework web MVC com C# e .NET',
      'MVC web framework with C# and .NET',
      'Framework web MVC con C# y .NET',
      2,
      ['backend', 'frameworks'],
      ['C#', '.NET', 'MVC', 'Web'],
      'aspnet',
      35,
    )
    sk(
      '.NET',
      '.NET',
      '.NET',
      'Plataforma de desenvolvimento multiplataforma da Microsoft',
      'Microsoft cross-platform development platform',
      'Plataforma de desarrollo multiplataforma de Microsoft',
      2,
      ['backend', 'frameworks'],
      ['C#', 'Framework', 'Cross-platform'],
      'dotnet',
      36,
    )
    sk(
      'Entity Framework',
      'Entity Framework',
      'Entity Framework',
      'ORM para .NET com mapeamento de dados',
      'ORM for .NET with data mapping',
      'ORM para .NET con mapeo de datos',
      2,
      ['backend', 'frameworks'],
      ['ORM', '.NET', 'Database'],
      'ef',
      37,
    )
    sk(
      'SQL Server',
      'SQL Server',
      'SQL Server',
      'SGBD relacional corporativo da Microsoft',
      'Microsoft enterprise relational DBMS',
      'SGBD relacional corporativo de Microsoft',
      2,
      ['backend'],
      ['Database', 'Microsoft', 'SQL'],
      'sqlserver',
      38,
    )
    sk(
      'REST Integration',
      'REST Integration',
      'REST Integration',
      'Integração de APIs RESTful em aplicações',
      'RESTful API integration in applications',
      'Integración de APIs RESTful en aplicaciones',
      2,
      ['backend'],
      ['API', 'REST', 'HTTP'],
      'rest',
      39,
    )
    sk(
      'Unreal Engine',
      'Unreal Engine',
      'Unreal Engine',
      'Motor de jogos 3D de alto desempenho',
      'High-performance 3D game engine',
      'Motor de juegos 3D de alto rendimiento',
      1,
      ['engines'],
      ['C++', '3D', 'Engine'],
      'unreal',
      40,
    )
    sk(
      'Godot',
      'Godot',
      'Godot',
      'Motor de jogos open-source e leve',
      'Lightweight open-source game engine',
      'Motor de juegos open-source y ligero',
      1,
      ['engines'],
      ['GDScript', 'Open Source', '2D'],
      'godot',
      41,
    )
    sk(
      'Visual Studio',
      'Visual Studio',
      'Visual Studio',
      'IDE completo para desenvolvimento C# e .NET',
      'Full IDE for C# and .NET development',
      'IDE completo para desarrollo C# y .NET',
      2,
      ['tools'],
      ['IDE', 'C#', 'Debugging'],
      'vs',
      42,
    )
    sk(
      'Visual Studio Code',
      'Visual Studio Code',
      'Visual Studio Code',
      'Editor leve e extensível para múltiplas linguagens',
      'Lightweight extensible editor for multiple languages',
      'Editor ligero y extensible para múltiples lenguajes',
      2,
      ['tools'],
      ['Editor', 'Extensions', 'Lightweight'],
      'vsc',
      43,
    )
    sk(
      'Git',
      'Git',
      'Git',
      'Sistema de controle de versão distribuído',
      'Distributed version control system',
      'Sistema de control de versiones distribuido',
      2,
      ['tools'],
      ['Version Control', 'Branching', 'VCS'],
      'git',
      44,
    )
    sk(
      'GitHub',
      'GitHub',
      'GitHub',
      'Plataforma de hospedagem de código e colaboração',
      'Code hosting and collaboration platform',
      'Plataforma de alojamiento de código y colaboración',
      2,
      ['tools'],
      ['Collaboration', 'CI/CD', 'Repository'],
      'github',
      45,
    )
    sk(
      'Unity Hub',
      'Unity Hub',
      'Unity Hub',
      'Gerenciador de projetos e versões da Unity',
      'Unity project and version manager',
      'Gestor de proyectos y versiones de Unity',
      1,
      ['tools'],
      ['Unity', 'Manager', 'Projects'],
      'unity_hub',
      46,
    )
    sk(
      'Unity Package Manager',
      'Unity Package Manager',
      'Unity Package Manager',
      'Gestão de pacotes e dependências na Unity',
      'Package and dependency management in Unity',
      'Gestión de paquetes y dependencias en Unity',
      1,
      ['tools'],
      ['Unity', 'Packages', 'Dependencies'],
      'upm',
      47,
    )
  },
  (app) => {
    try {
      var old = app.findRecordsByFilter('skills', "id != ''", '', 200, 0)
      for (var i = 0; i < old.length; i++) app.delete(old[i])
    } catch (_) {}
  },
)
