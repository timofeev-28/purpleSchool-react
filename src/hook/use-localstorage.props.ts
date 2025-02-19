export interface UseLocalStorageProps {
    name: string;
    isLogined: boolean;
}

export type ResFunctionProps = [UseLocalStorageProps, (user: UseLocalStorageProps) => void]
