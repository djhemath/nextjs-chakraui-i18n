const dictionaries = {
    "en-in": () => import('./dictionaries/en-in.json'),
    "fr": () => import('./dictionaries/fr.json'),
};

export const getDictionary = async (locale: ("en-in" | "fr")) => dictionaries[locale]();