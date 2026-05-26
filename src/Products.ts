export type Product = {
    id: string
    name: string
    description: string
}

export const products: Product[] = [
    {
        id: 'p-001',
        name: 'Flow Keyboard',
        description: 'Low-profile mechanical keyboard with silent switches.',
    },
    {
        id: 'p-002',
        name: 'Orbit Mouse',
        description: 'Ergonomic mouse with customizable DPI.',
    },
    {
        id: 'p-003',
        name: 'Lens Dock',
        description: 'USB-C hub with SD, HDMI, and Ethernet.',
    },
    {
        id: 'p-004',
        name: 'Focus Timer',
        description: 'Minimalist desktop timer for deep work sessions.',
    },
    {
        id: 'p-005',
        name: 'Atlas Notes',
        description: 'Markdown knowledge base with fast search.',
    },
]