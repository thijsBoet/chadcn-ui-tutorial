'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import Container from './ui/container';
import { Button } from './ui/button';

import { Menu, Moon, ShoppingCart, Sun } from 'lucide-react';
import ProfileButton from './ui/ProfileButton';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const Header = () => {
	const { theme, setTheme } = useTheme('light');
	const routes = [
		{
			id: 1,
			href: '/',
			label: 'Products',
		},
		{
			id: 2,
			href: '/',
			label: 'Categories',
		},
		{
			id: 3,
			href: '/',
			label: 'On Sale',
		},
	];

	return (
		<header className='sm:flex sm:justify-between py-3 px-4 border-b'>
			<Container>
				<div className='relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full'>
					<div className='flex items-center'>
						<Sheet>
							<SheetTrigger>
								<Menu className='h-6 w-6 md:hidden' />
              </SheetTrigger>
              <SheetContent side='left' className='w-[300px] sm:w-[400px]'>
                <nav className="flex flex-col">
                  {routes.map((route, i) => (
                    <Link key={route.id} href={route.href} className='block px-2 py-1 text-lg'>
                    {route.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
						</Sheet>
						<Link href='/' className='ml-4 lg:ml-0'>
							<h1 className='text-xl font-bold'>STORE NAME</h1>
						</Link>
          </div>
          </div>
					<nav className='mx-6 sm:flex items-center space-x-4 lg:space-x-6 hidden md:block'>
						{routes.map((route, i) => (
							<Button asChild variant='ghost' key={route.id}>
								<Link
									href={route.href}
									className='text-sm font-medium transition-colors'>
									{route.label}
								</Link>
							</Button>
						))}
					</nav>
					<div className='flex w-full justify-end'>
						<Button
							variant='ghost'
							size='icon'
							className='mr-2'
							aria-label='Shopping Cart'>
							<ShoppingCart className='h-6 w-6' />
							<span className='sr-only'>Shopping Cart</span>
						</Button>
						<Button
							variant='ghost'
							size='icon'
							aria-label='Toggle Theme'
							className='mr-6'
							onClick={() =>
								setTheme(theme === 'dark' ? 'light' : 'dark')
							}>
							<Sun className='h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
							<Moon className='absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
							<span className='sr-only'>Toggle Theme</span>
						</Button>
						<ProfileButton />
					</div>
			</Container>
		</header>
	);
};

export default Header;
