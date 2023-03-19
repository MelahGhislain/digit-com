export interface MobileNavbarProps {
    children: JSX.Element | JSX.Element[]
    openDrawer: boolean
    setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>
}

export interface DrawerProps {
    open?: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}