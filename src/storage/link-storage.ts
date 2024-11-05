import AsyncStorage from "@react-native-async-storage/async-storage";

const LINKS_STORAGE_KEYS = "links-storage"

type LinkStorage = {
    id: string
    name: string
    url: string
    category: string
}

async function get(): Promise<LinkStorage[]> {
    const storage = await AsyncStorage.getItem(LINKS_STORAGE_KEYS)
    const response = storage ? JSON.parse(storage) : []

    return response
}

async function save(newLink: LinkStorage) {
    try {
        const storage = await get()
        const updated = JSON.stringify([...storage, newLink])

        await AsyncStorage.setItem(LINKS_STORAGE_KEYS, updated)
    } catch (error) {
        throw error
    }
}

export const LinkStorage = { get, save }
