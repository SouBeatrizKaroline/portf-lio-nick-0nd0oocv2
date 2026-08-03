migrate(
  (app) => {
    // 1. Update skills collection category select values
    try {
      var skillsCol = app.findCollectionByNameOrId('skills')

      // Delete all existing skill records first
      try {
        var oldSkills = app.findRecordsByFilter('skills', "id != ''", '', 200, 0)
        for (var i = 0; i < oldSkills.length; i++) {
          app.delete(oldSkills[i])
        }
      } catch (_) {}

      // Remove old category field and add new one
      var oldCatField = skillsCol.fields.getByName('category')
      if (oldCatField) {
        skillsCol.fields.remove(oldCatField)
      }
      skillsCol.fields.add(
        new SelectField({
          name: 'category',
          required: true,
          values: ['game_development', 'languages', 'backend', 'engines', 'tools'],
          maxSelect: 1,
        }),
      )
      app.save(skillsCol)

      // Seed new skills
      var newSkills = [
        {
          category: 'game_development',
          name_pt: 'Unity',
          name_en: 'Unity',
          name_es: 'Unity',
          level: 95,
          order: 1,
        },
        {
          category: 'game_development',
          name_pt: 'Gameplay Programming',
          name_en: 'Gameplay Programming',
          name_es: 'Gameplay Programming',
          level: 92,
          order: 2,
        },
        {
          category: 'game_development',
          name_pt: '2D',
          name_en: '2D',
          name_es: '2D',
          level: 90,
          order: 3,
        },
        {
          category: 'game_development',
          name_pt: '3D',
          name_en: '3D',
          name_es: '3D',
          level: 85,
          order: 4,
        },
        {
          category: 'game_development',
          name_pt: 'Animation',
          name_en: 'Animation',
          name_es: 'Animacion',
          level: 85,
          order: 5,
        },
        {
          category: 'game_development',
          name_pt: 'Animator',
          name_en: 'Animator',
          name_es: 'Animator',
          level: 82,
          order: 6,
        },
        {
          category: 'game_development',
          name_pt: 'State Machine',
          name_en: 'State Machine',
          name_es: 'State Machine',
          level: 90,
          order: 7,
        },
        {
          category: 'game_development',
          name_pt: 'Cinemachine',
          name_en: 'Cinemachine',
          name_es: 'Cinemachine',
          level: 88,
          order: 8,
        },
        {
          category: 'game_development',
          name_pt: 'Netcode',
          name_en: 'Netcode',
          name_es: 'Netcode',
          level: 75,
          order: 9,
        },
        {
          category: 'game_development',
          name_pt: 'Cloud Save',
          name_en: 'Cloud Save',
          name_es: 'Cloud Save',
          level: 80,
          order: 10,
        },
        {
          category: 'game_development',
          name_pt: 'Authentication',
          name_en: 'Authentication',
          name_es: 'Autenticacion',
          level: 82,
          order: 11,
        },
        {
          category: 'game_development',
          name_pt: 'WebGL',
          name_en: 'WebGL',
          name_es: 'WebGL',
          level: 85,
          order: 12,
        },
        {
          category: 'game_development',
          name_pt: 'Mobile',
          name_en: 'Mobile',
          name_es: 'Mobile',
          level: 85,
          order: 13,
        },
        {
          category: 'game_development',
          name_pt: 'URP',
          name_en: 'URP',
          name_es: 'URP',
          level: 88,
          order: 14,
        },
        {
          category: 'languages',
          name_pt: 'C#',
          name_en: 'C#',
          name_es: 'C#',
          level: 92,
          order: 15,
        },
        {
          category: 'languages',
          name_pt: 'Java',
          name_en: 'Java',
          name_es: 'Java',
          level: 75,
          order: 16,
        },
        {
          category: 'languages',
          name_pt: 'JavaScript',
          name_en: 'JavaScript',
          name_es: 'JavaScript',
          level: 80,
          order: 17,
        },
        {
          category: 'languages',
          name_pt: 'HTML',
          name_en: 'HTML',
          name_es: 'HTML',
          level: 85,
          order: 18,
        },
        {
          category: 'languages',
          name_pt: 'CSS',
          name_en: 'CSS',
          name_es: 'CSS',
          level: 80,
          order: 19,
        },
        {
          category: 'languages',
          name_pt: 'SQL',
          name_en: 'SQL',
          name_es: 'SQL',
          level: 82,
          order: 20,
        },
        {
          category: 'backend',
          name_pt: 'ASP.NET MVC',
          name_en: 'ASP.NET MVC',
          name_es: 'ASP.NET MVC',
          level: 85,
          order: 21,
        },
        {
          category: 'backend',
          name_pt: 'Entity Framework',
          name_en: 'Entity Framework',
          name_es: 'Entity Framework',
          level: 82,
          order: 22,
        },
        {
          category: 'backend',
          name_pt: '.NET',
          name_en: '.NET',
          name_es: '.NET',
          level: 85,
          order: 23,
        },
        {
          category: 'backend',
          name_pt: 'SQL Server',
          name_en: 'SQL Server',
          name_es: 'SQL Server',
          level: 80,
          order: 24,
        },
        {
          category: 'engines',
          name_pt: 'Unity',
          name_en: 'Unity',
          name_es: 'Unity',
          level: 95,
          order: 25,
        },
        {
          category: 'engines',
          name_pt: 'Godot',
          name_en: 'Godot',
          name_es: 'Godot',
          level: 60,
          order: 26,
        },
        {
          category: 'engines',
          name_pt: 'Unreal Engine',
          name_en: 'Unreal Engine',
          name_es: 'Unreal Engine',
          level: 55,
          order: 27,
        },
        { category: 'tools', name_pt: 'Git', name_en: 'Git', name_es: 'Git', level: 90, order: 28 },
        {
          category: 'tools',
          name_pt: 'GitHub',
          name_en: 'GitHub',
          name_es: 'GitHub',
          level: 90,
          order: 29,
        },
        {
          category: 'tools',
          name_pt: 'Visual Studio',
          name_en: 'Visual Studio',
          name_es: 'Visual Studio',
          level: 90,
          order: 30,
        },
        {
          category: 'tools',
          name_pt: 'VS Code',
          name_en: 'VS Code',
          name_es: 'VS Code',
          level: 88,
          order: 31,
        },
      ]

      var freshCol = app.findCollectionByNameOrId('skills')
      for (var k = 0; k < newSkills.length; k++) {
        var skill = newSkills[k]
        try {
          app.findFirstRecordByData('skills', 'name_pt', skill.name_pt)
        } catch (_) {
          var sr = new Record(freshCol)
          var sk = Object.keys(skill)
          for (var m = 0; m < sk.length; m++) {
            sr.set(sk[m], skill[sk[m]])
          }
          app.save(sr)
        }
      }
    } catch (err) {
      console.log('Skills update error: ' + String(err))
    }

    // 2. Update experience records with achieved results
    try {
      var expUpdates = [
        {
          findRole: 'Unity Developer (Freelancer)',
          description_pt:
            'Desenvolvimento de jogo WebGL e Mobile em Unity para projeto comercial. Implementacao de sistemas de autenticacao backend, cloud save e otimizacao de performance para navegadores. Resultados: reducao de 40% no tempo de carregamento, arquitetura escalavel de State Machine e entrega no prazo com deploy em producao.',
          description_en:
            'Development of WebGL and Mobile game in Unity for a commercial project. Implementation of backend authentication systems, cloud save, and browser performance optimization. Results: 40% reduction in loading time, scalable State Machine architecture, and on-time delivery with production deployment.',
          description_es:
            'Desarrollo de juego WebGL y Mobile en Unity para proyecto comercial. Implementacion de autenticacion backend, cloud save y optimizacion para navegadores. Resultados: reduccion del 40% en tiempo de carga, arquitectura escalable de State Machine y entrega a tiempo con deploy en produccion.',
          tags: [
            'WebGL',
            'Unity',
            'Backend',
            'Cloud Save',
            'Authentication',
            'Mobile',
            'Performance',
            'Production Deploy',
          ],
        },
        {
          findRole: 'Programadora Trainee',
          description_pt:
            'Treinamento corporativo em desenvolvimento Java, modelagem de banco de dados SQL Server e fundamentos de ABAP. Resultados: dominio de programacao orientada a objetos, contribuicao em projetos empresariais e base solida em arquitetura de software corporativo.',
          description_en:
            'Corporate training in Java development, SQL Server database modeling, and ABAP fundamentals. Results: mastery of object-oriented programming, contribution to enterprise projects, and solid foundation in corporate software architecture.',
          description_es:
            'Capacitacion corporativa en desarrollo Java, modelado de base de datos SQL Server y fundamentos de ABAP. Resultados: dominio de programacion orientada a objetos, contribucion en proyectos empresariales y base solida en arquitectura de software corporativo.',
          tags: ['Java', 'SQL Server', 'ABAP', 'OOP', 'Enterprise'],
        },
      ]

      for (var e = 0; e < expUpdates.length; e++) {
        var upd = expUpdates[e]
        try {
          var rec = app.findFirstRecordByData('experience', 'role_pt', upd.findRole)
          rec.set('description_pt', upd.description_pt)
          rec.set('description_en', upd.description_en)
          rec.set('description_es', upd.description_es)
          rec.set('tags', upd.tags)
          app.save(rec)
        } catch (_) {}
      }
    } catch (err) {
      console.log('Experience update error: ' + String(err))
    }

    // 3. Update project content and links
    try {
      var projUpdates = [
        {
          slug: 'metroidvania',
          github_url: 'https://github.com/NicolePLSilva/metroidvania-2d',
          itch_url: 'https://pls-nick.itch.io/shadow-nexus',
          content_pt:
            'Este projeto e um prototipo avancado de Metroidvania 2D com mecanicas completas de Player Controller: Dash, Wall Jump, Wall Slide, Jump Buffer e Coyote Time.\n\nArquitetura: State Machine modular para gerenciamento limpo de estados do personagem, ScriptableObjects para configuracao de dados e Event Channels para comunicacao desacoplada.\n\nDesafios: Implementar deteccao de colisao precisa para Wall Slide sem comprometer a fluidez do movimento. Solucao: Uso de OverlapBox com offsets dinamicos e raycasting adaptativo.\n\nAprendizados: A importancia do Coyote Time e Jump Buffer para game feel, e como arquitetura desacoplada facilita iteracao rapida em mecanicas.\n\nRole: Gameplay Programmer e Game Designer - implementacao completa de todos os sistemas de movimento, combate e camera.',
          content_en:
            'This project is an advanced 2D Metroidvania prototype with complete Player Controller mechanics: Dash, Wall Jump, Wall Slide, Jump Buffer, and Coyote Time.\n\nArchitecture: Modular State Machine for clean character state management, ScriptableObjects for data configuration, and Event Channels for decoupled communication.\n\nChallenges: Implementing precise collision detection for Wall Slide without compromising movement fluidity. Solution: OverlapBox with dynamic offsets and adaptive raycasting.\n\nLearnings: The importance of Coyote Time and Jump Buffer for game feel, and how decoupled architecture enables rapid iteration on mechanics.\n\nRole: Gameplay Programmer and Game Designer - full implementation of all movement, combat, and camera systems.',
          content_es:
            'Este proyecto es un prototipo avanzado de Metroidvania 2D con mecanicas completas de Player Controller: Dash, Wall Jump, Wall Slide, Jump Buffer y Coyote Time.\n\nArquitectura: State Machine modular para gestion limpia de estados del personaje, ScriptableObjects para configuracion de datos y Event Channels para comunicacion desacoplada.\n\nDesafios: Implementar deteccion de colision precisa para Wall Slide sin comprometer la fluidez del movimiento. Solucion: OverlapBox con offsets dinamicos y raycasting adaptativo.\n\nAprendizajes: La importancia del Coyote Time y Jump Buffer para game feel, y como la arquitectura desacoplada facilita la iteracion rapida en mecanicas.\n\nRole: Gameplay Programmer y Game Designer - implementacion completa de todos los sistemas de movimiento, combate y camara.',
        },
        {
          slug: 'aspnet-mvc',
          github_url: 'https://github.com/NicolePLSilva/aspnet-management',
          itch_url: '',
          content_pt:
            'Sistema completo desenvolvido para ambiente corporativo com autenticacao segura, operacoes CRUD otimizadas, consultas LINQ complexas e arquitetura de dados escalavel com SQL Server.\n\nArquitetura: Padrao MVC com camadas bem definidas - Controllers, Services, Repositories e Data Context. Entity Framework Core com Migrations para versionamento de schema.\n\nDesafios: Otimizar consultas LINQ que processavam grandes volumes de dados. Solucao: Refatoracao com eager loading seletivo e projecoes DTO.\n\nAprendizados: A importancia de separacao de concerns em aplicacoes enterprise e como o padrao Repository abstrai complexidade de acesso a dados.\n\nRole: Full Stack Developer - desenvolvimento de backend, frontend Razor Views e modelagem de banco de dados.',
          content_en:
            'Comprehensive enterprise system featuring secure authentication, optimized CRUD operations, complex LINQ queries, and scalable SQL Server data architecture.\n\nArchitecture: MVC pattern with well-defined layers - Controllers, Services, Repositories, and Data Context. Entity Framework Core with Migrations for schema versioning.\n\nChallenges: Optimizing LINQ queries processing large data volumes. Solution: Refactoring with selective eager loading and DTO projections.\n\nLearnings: The importance of separation of concerns in enterprise applications and how the Repository pattern abstracts data access complexity.\n\nRole: Full Stack Developer - backend development, Razor Views frontend, and database modeling.',
          content_es:
            'Sistema completo disenado para entorno empresarial con autenticacion segura, operaciones CRUD optimizadas, consultas LINQ complejas y arquitectura SQL Server escalable.\n\nArquitectura: Patron MVC con capas bien definidas - Controllers, Services, Repositories y Data Context. Entity Framework Core con Migrations para versionado de schema.\n\nDesafios: Optimizar consultas LINQ que procesaban grandes volumenes de datos. Solucion: Refactorizacion con eager loading selectivo y proyecciones DTO.\n\nAprendizajes: La importancia de separacion de concerns en aplicaciones enterprise y como el patron Repository abstrae complejidad de acceso a datos.\n\nRole: Full Stack Developer - desarrollo de backend, frontend Razor Views y modelado de base de datos.',
        },
        {
          slug: 'csharp-interpreter',
          github_url: 'https://github.com/NicolePLSilva/csharp-interpreter',
          itch_url: '',
          content_pt:
            'Desenvolvimento do zero de um Lexer, Parser e AST (Abstract Syntax Tree) para parsing e execucao de formulas e comandos dentro de sistemas de jogos.\n\nArquitetura: Pipeline de compilacao classico - Lexer (tokenizacao), Parser (analise sintatica), AST (representacao intermediaria) e Interpreter (execucao).\n\nDesafios: Tratar precedencia de operadores e escopo de variaveis corretamente. Solucao: Parser recursivo descendente com tabela de simbolos hierarquica.\n\nAprendizados: Como compiladores funcionam internamente, e como essa base pode ser aplicada para criar DSLs (Domain Specific Languages) em jogos.\n\nRole: Software Engineer - design e implementacao completa do interpretador.',
          content_en:
            'Built from scratch including a Lexer, Parser, and AST (Abstract Syntax Tree) to parse and execute math formulas and game triggers dynamically.\n\nArchitecture: Classic compilation pipeline - Lexer (tokenization), Parser (syntactic analysis), AST (intermediate representation), and Interpreter (execution).\n\nChallenges: Handling operator precedence and variable scoping correctly. Solution: Recursive descent parser with hierarchical symbol table.\n\nLearnings: How compilers work internally, and how this foundation can be applied to create DSLs (Domain Specific Languages) in games.\n\nRole: Software Engineer - complete design and implementation of the interpreter.',
          content_es:
            'Desarrollado desde cero con Lexer, Parser y AST (Abstract Syntax Tree) para analizar y ejecutar formulas y activadores de juegos en tiempo real.\n\nArquitectura: Pipeline de compilacion clasico - Lexer (tokenizacion), Parser (analisis sintactico), AST (representacion intermedia) e Interpreter (ejecucion).\n\nDesafios: Manejar precedencia de operadores y alcance de variables correctamente. Solucion: Parser recursivo descendente con tabla de simbolos jerarquica.\n\nAprendizajes: Como funcionan los compiladores internamente, y como esta base puede aplicarse para crear DSLs en juegos.\n\nRole: Software Engineer - diseno e implementacion completa del interprete.',
        },
      ]

      for (var p = 0; p < projUpdates.length; p++) {
        var pu = projUpdates[p]
        try {
          var prec = app.findFirstRecordByData('projects', 'slug', pu.slug)
          prec.set('github_url', pu.github_url)
          if (pu.itch_url) prec.set('itch_url', pu.itch_url)
          prec.set('content_pt', pu.content_pt)
          prec.set('content_en', pu.content_en)
          prec.set('content_es', pu.content_es)
          app.save(prec)
        } catch (_) {}
      }
    } catch (err) {
      console.log('Project update error: ' + String(err))
    }
  },
  (app) => {
    // Revert skills: restore old select values
    try {
      var col = app.findCollectionByNameOrId('skills')
      var catField = col.fields.getByName('category')
      if (catField) col.fields.remove(catField)
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
      app.save(col)
    } catch (_) {}
  },
)
