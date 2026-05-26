import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type UserState = {
    user: {
        id: string
        friends: string[]
        profile: {
            name: string
            email: string
            address: {
                street: string
                city: string
                zipcode: string
            }
        }
    }
    updateAddressStreet: (street: string) => void
}

const initialState: Omit<UserState, 'updateAddressStreet'> = {
    user: {
        id: 'user 123',
        friends: ['ram', 'shyam', 'hari', 'gita'],
        profile: {
            name: 'afas',
            email: 'a@gmail.com',
            address: {
                street: 'afa',
                city: 'afqgq',
                zipcode: 'av r',
            },
        },
    },
}

export const useUserStore = create<UserState>()(
    immer((set) => ({
        ...initialState,
        updateAddressStreet: (street) =>
            set((state) => {    
                state.user.profile.address.street = street
            }),
    }))
)