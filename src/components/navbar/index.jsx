import React, { useState, useEffect } from 'react';

import NavIcon from './components/navIcon';
import Language from './components/language';
import Text from '../../components/text';
import Logo from '../../../images/PetrofindLogo.png'

import {
	MdOutlineSearch,
	MdOutlineBedtime,
	MdOutlineNotifications,
	MdOutlineModeComment,
	MdOutlineGridView,
	MdManageAccounts,
	MdOutlineSettings
}
	from 'react-icons/md';

import { Container, Box, IconsArea } from './styles';

const Navbar = () => {

	const [active, setActive] = useState(false)

	const NavButtons = [
		{
			data: {
				icon: <MdOutlineSearch />,
				name: 'Search'
			},
		},

		{
			data: {
				icon: <MdOutlineBedtime />,
				name: 'Mode'
			},
		},

		{
			data: {
				icon: <MdOutlineNotifications />,
				name: 'Notifications'
			},
		},

		{
			data: {
				icon: <MdOutlineModeComment />,
				name: 'Chat'
			},
		},

		{
			data: {
				icon: <MdOutlineGridView />,
				name: 'MenuGrid'
			},
		},

		{
			data: {
				icon: <MdManageAccounts />,
				name: 'User'
			},
		},

	]

	return (
		<Container>
			<Box>
			<section>

				<img src={Logo} />
				Petrofind
			</section>
			<section>

				<IconsArea>
					{NavButtons.map((item, index) => {
						return (
							<NavIcon key={index} icon={item.data.icon} />
						)

					})}

				</IconsArea>
				<div>
					<Text text='Usuário' fontSize="12px" fontWeight='bold' />
					<Text text='Cargo' fontSize='8px' />
				</div>
				<MdOutlineSettings color="#D9D9D9" size={24}/>
			</section>
			</Box>
			<Language/>
		</Container>
	)

}

export default Navbar
