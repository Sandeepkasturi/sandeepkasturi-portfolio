"use client";

import React from 'react';

import { Heading, Text, Flex, Button, Grid, Icon, InlineCode, Logo, LetterFx, Arrow } from '@/once-ui/components';
import Link from 'next/link';

export default function Home() {
	const links = [
		{
			href: "https://github.com/Sandeepkasturi?tab=repositories",
			title: "Projects",
			description: "Recent projects and my work.",
		},
		{
			href: "https://skavtech.wegic.app",
			title: "Company",
			description: "Our Company and my Vision.",
		},
		{
			href: "https://www.linkedin.com/in/sandeepkasturi9/",
			title: "Experience",
			description: "My Experience and Linkedin profile.",
		},
		
		{
			href: "https://sandeepkasturi.vercel.app/contact-us",
			title: "Contact Us",
			description: "Contact us here",
		},
		
		{
			href: "https://sandeepkasturi.vercel.app/terms-conditions",
			title: "Terms & Conditions",
			description: "Terms and Conditions here.",
		},
		
	];

	return (
		<Flex
			fillWidth paddingTop="l" paddingX="l"
			direction="column" alignItems="center" flex={1}>
			<Flex
				position="relative"
				as="section" overflow="hidden"
				fillWidth minHeight="0" maxWidth={68}
				direction="column" alignItems="center" flex={1}>
				<Flex
					as="main"
					direction="column" justifyContent="center"
					fillWidth fillHeight padding="l" gap="l">
					<Flex
						mobileDirection="column"
						fillWidth gap="24">
						<Flex
							position="relative"
							flex={2} paddingTop="56" paddingX="xl">
							<Logo size="xl" icon={false} style={{zIndex: '1'}} href="https://once-ui.com"/>
						</Flex>
						<Flex
							position="relative"
							flex={4} gap="24" marginBottom="104"
							direction="column">
							<InlineCode
								className="shadow-m"
								style={{
									width: 'fit-content',
									padding: 'var(--static-space-8) var(--static-space-16)',
									backdropFilter: 'blur(var(--static-space-1))'}}>
								Start AutoBot AI <span className="brand-on-background-medium">Immensive Code Editor and Hands on AI developer</span>
							</InlineCode>
							<Heading
								wrap="balance"
								variant="display-strong-s">
								<span className="font-code">
									<LetterFx
										trigger="instant">
										Helping designers code and developers design
									</LetterFx>
								</span>
							</Heading>
							<Button
								id="readDocs"
								href="https://autobots.streamlit.app"
								variant="secondary">
								<Flex alignItems="center">
									Run AutoBot 💀
									<Arrow trigger="#readDocs"/>
								</Flex>
							</Button>
						</Flex>
					</Flex>
					<Grid
						radius="l"
						border="neutral-medium"
						borderStyle="solid-1"
						columns="repeat(3, 1fr)"
						tabletColumns="1col"
						mobileColumns="1col"
						fillWidth>
						{links.map((link) => (
							<Link
								target="_blank"
								style={{ padding: 'var(--responsive-space-l)' }}
								key={link.href}
								href={link.href}>
								<Flex
									fillWidth paddingY="8" gap="8"
									direction="column">
									<Flex
										fillWidth gap="12"
										alignItems="center">
										<Text
											variant="body-strong-m" onBackground="neutral-strong">
											{link.title}
										</Text>
										<Icon size="s" name="arrowUpRight" />
									</Flex>
									<Text
										variant="body-default-s" onBackground="neutral-weak">
										{link.description}
									</Text>
								</Flex>
							</Link>
						))}
					</Grid>
				</Flex>
			</Flex>
			<Flex
				as="footer"
				position="relative"
				fillWidth paddingX="l" paddingY="m"
				justifyContent="space-between">
				<Text
					variant="body-default-s" onBackground="neutral-weak">
					© 2024 Sandeep Kasturi, <Link href="https://skavtech.wegic.app/about">SKAV TECH</Link>
				</Text>
				<Flex
					gap="12">
					<Button
						href="https://github.com/sandeepkasturi"
						prefixIcon="github" size="s" variant="tertiary">
						GitHub
					</Button>
					<Button
						href="https://discord.gg/GnrQ2zhZ"
						prefixIcon="discord" size="s" variant="tertiary">
						Discord
					</Button>
				</Flex>
			</Flex>
		</Flex>
	);
}
