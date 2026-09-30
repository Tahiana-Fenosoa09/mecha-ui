interface Module {
    parentId: number,
    id: number,
    name: string,
    size: number
}

interface Topic {
    id: number,
    name: string,
    size: number
}

const topics : Topic[] = [
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

const modules : Module[] = [
    {
        parentId: 2,
        id: 1,
        name: 'Software',
        size: 1
    },
    {
        parentId: 2,
        id: 2,
        name: 'Hardware',
        size: 0
    }
];



export function getModulesAtTopicId(id: number) : Module[] {
    const moduleList = modules.filter((module) => {
        return module.parentId === id;
    });

    return moduleList;
}

export function getTopics() : Topic[] {
    return topics;
}
