export interface ModuleData {
    parentId: number,
    id: number,
    name: string,
    size: number
}

export interface BranchData {
    id: number,
    name: string,
    size: number
}

export interface SubTopicType {
    id: number , 
    title: string , 
    parent: string , 
    order: number, 
    type: string
}

export interface TopicType {
    id: number , 
    title: string , 
    parentId: number , 
    order: number, 
    type: string
}

const branches : BranchData[] = [
    {
        id: 1,
        name: 'Science',
        size: 0

    },
    {
        id: 2,
        name: 'Technology',
        size: 2

    },
    {
        id: 3,
        name: 'Engineering',
        size: 0

    },
    {
        id: 4,
        name: 'Mathematics',
        size: 0

    },
];


const modules : ModuleData[] = [
    {
        parentId: 2,
        id: 1,
        name: 'Software',
        size: 1, 
    },
    {
        parentId: 2,
        id: 2,
        name: 'Hardware',
        size: 0
    }
];

const topics : TopicType[] = [
    {
        id: 2 , 
        title : 'intergration',
        parentId: 1,
        order: 1, 
        type: 'document'
    },
    {
        id: 3 , 
        title : 'exponential',
        parentId: 2,    
        order: 2,
         type: 'video'
    },
    {
        id: 5 , 
        title : 'logarithm',
        parentId: 1,
        order: 3, 
         type: 'document'
    },
    {
        id: 6 , 
        title : 'derivatives',
        parentId: 2,
        order: 4,
        type: 'video'
    }
];

const subTopics : SubTopicType[] = [
    {
        id: 2 , 
        title : 'intergration',
        parent: 'intro to calculus',
        order: 1, 
        type: 'document'
    },
    {
        id: 3 , 
        title : 'exponential',
        parent: 'intro to calculus',
        order: 2,
         type: 'video'
    },
    {
        id: 5 , 
        title : 'logarithm',
        parent: 'intro to calculus',
        order: 3, 
         type: 'document'
    },
    {
        id: 6 , 
        title : 'derivatives',
        parent: 'intro to calculus',
        order: 4,
        type: 'video'
    }
]

export function getModulesAtTopicId(id: number) : ModuleData[] {
    const moduleList = modules.filter((module) => {
        return module.parentId === id;
    });

    return moduleList;
}


export function getTopicsAtModulesId(id: number) : TopicType[] {
    const topicsList = topics.filter((topic) => {
        return topic.parentId === id;
    });

    return topicsList;
}



export function getBranchTitle(id: number) : string {
    const searchedBranch = branches.find((branch) => {
        return branch.id === id;
    })

    return searchedBranch?.name ?? "";
}

export function getBranches() : BranchData[] {
    return branches;
}

export function getModuleTitle(id: number) : string {
    const searchedModule = modules.find((module) => {
        return module.id === id;
    })

    return searchedModule?.name ?? "";
}

export function getSubtopics() : SubTopicType[] {
    return subTopics;
}