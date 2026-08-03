import pb from '@/lib/pocketbase/client'

export interface SkillRecord {
  id: string
  category: string
  name_pt: string
  name_en: string
  name_es: string
  level: number
  order: number
}

export const getSkills = async (): Promise<SkillRecord[]> => {
  try {
    return await pb.collection('skills').getFullList<SkillRecord>({
      sort: 'order',
    })
  } catch (err) {
    console.warn('Failed to fetch skills from PocketBase, returning fallback dataset:', err)
    return [
      {
        id: '1',
        category: 'game_development',
        name_pt: 'Unity 2D/3D',
        name_en: 'Unity 2D/3D',
        name_es: 'Unity 2D/3D',
        level: 95,
        order: 1,
      },
      {
        id: '2',
        category: 'game_development',
        name_pt: 'Gameplay Programming',
        name_en: 'Gameplay Programming',
        name_es: 'Gameplay Programming',
        level: 92,
        order: 2,
      },
      {
        id: '3',
        category: 'game_development',
        name_pt: 'State Machine & AI',
        name_en: 'State Machine & AI',
        name_es: 'State Machine & AI',
        level: 90,
        order: 3,
      },
      {
        id: '4',
        category: 'game_development',
        name_pt: 'URP & Shader Graph',
        name_en: 'URP & Shader Graph',
        name_es: 'URP & Shader Graph',
        level: 88,
        order: 4,
      },
      {
        id: '5',
        category: 'game_development',
        name_pt: 'Cinemachine & Physics',
        name_en: 'Cinemachine & Physics',
        name_es: 'Cinemachine & Physics',
        level: 88,
        order: 5,
      },
      {
        id: '6',
        category: 'languages',
        name_pt: 'C# (.NET / Unity)',
        name_en: 'C# (.NET / Unity)',
        name_es: 'C# (.NET / Unity)',
        level: 95,
        order: 6,
      },
      {
        id: '7',
        category: 'languages',
        name_pt: 'Java',
        name_en: 'Java',
        name_es: 'Java',
        level: 75,
        order: 7,
      },
      {
        id: '8',
        category: 'languages',
        name_pt: 'JavaScript / TypeScript',
        name_en: 'JavaScript / TypeScript',
        name_es: 'JavaScript / TypeScript',
        level: 82,
        order: 8,
      },
      {
        id: '9',
        category: 'languages',
        name_pt: 'SQL',
        name_en: 'SQL',
        name_es: 'SQL',
        level: 85,
        order: 9,
      },
      {
        id: '10',
        category: 'backend',
        name_pt: 'ASP.NET Core',
        name_en: 'ASP.NET Core',
        name_es: 'ASP.NET Core',
        level: 85,
        order: 10,
      },
      {
        id: '11',
        category: 'backend',
        name_pt: 'Entity Framework Core',
        name_en: 'Entity Framework Core',
        name_es: 'Entity Framework Core',
        level: 82,
        order: 11,
      },
      {
        id: '12',
        category: 'backend',
        name_pt: 'SQL Server',
        name_en: 'SQL Server',
        name_es: 'SQL Server',
        level: 80,
        order: 12,
      },
      {
        id: '13',
        category: 'engines',
        name_pt: 'Unity 6 / 2022 LTS',
        name_en: 'Unity 6 / 2022 LTS',
        name_es: 'Unity 6 / 2022 LTS',
        level: 95,
        order: 13,
      },
      {
        id: '14',
        category: 'engines',
        name_pt: 'Godot Engine',
        name_en: 'Godot Engine',
        name_es: 'Godot Engine',
        level: 65,
        order: 14,
      },
      {
        id: '15',
        category: 'tools',
        name_pt: 'Git & GitHub',
        name_en: 'Git & GitHub',
        name_es: 'Git & GitHub',
        level: 92,
        order: 15,
      },
      {
        id: '16',
        category: 'tools',
        name_pt: 'Visual Studio & Rider',
        name_en: 'Visual Studio & Rider',
        name_es: 'Visual Studio & Rider',
        level: 90,
        order: 16,
      },
    ]
  }
}
