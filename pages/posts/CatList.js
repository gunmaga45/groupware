import React from 'react'
import MainFrame from '../../Components/MainFrame'
import Link from 'next/link'
import { Home } from '@material-ui/icons'
import PopupMenu from '../../Components/PopupMenu'

const CatList = () => {
    return (
        <div>
            <MainFrame title='Cat List'>
                <PopupMenu/>
                <Link href = '/'>
                    <a><Home/></a>
                </Link>
            </MainFrame>
        </div>
    )
}

export default CatList