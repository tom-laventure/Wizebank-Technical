interface direction {
    x: number,
    y: number
}

interface MovementType {
    u: direction
    d: direction
    l: direction
    r: direction
}

export const MOVEMENT: MovementType = {
    u: { x: 0, y: -1 },
    d: { x: 0, y: 1 },
    l: { x: -1, y: 0 },
    r: { x: 1, y: 0 }
}