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
        size: 1
    },
    {
        parentId: 2,
        id: 2,
        name: 'Hardware',
        size: 0
    }
];



export function getModulesAtTopicId(id: number) : ModuleData[] {
    const moduleList = modules.filter((module) => {
        return module.parentId === id;
    });

    return moduleList;
}


export function getBranchTitle(id: number) : string {
    const searchedModule = branches.find((module) => {
        return module.id === id;
    })

    return searchedModule?.name ?? "";
}

export function getBranches() : BranchData[] {
    return branches;
}
