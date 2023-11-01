import { motion } from 'framer-motion';

const AnimatedDiv = motion.div({
	initial: { y: '-100%' },
	animate: { y: '0%' },
	exit: { y: '-100%' },
	transition: { duration: 1 },
});

export default AnimatedDiv;
