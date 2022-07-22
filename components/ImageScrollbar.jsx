import Image from 'next/image';
import { useContext } from 'react';
import { Box, Flex, Icon } from '@chakra-ui/react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Flex alignItems="center" justifyContent="center" marginLeft="1">
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => scrollNext()}
        fontSize="2xl"
        cursor="pointer"
        d={['none', 'none', 'none', 'block']}
      />
    </Flex>
  );
};

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex alignItems="center" justifyContent="center" marginLeft="1">
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => scrollPrev()}
        fontSize="2xl"
        cursor="pointer"
        d={['none', 'none', 'none', 'block']}
      />
    </Flex>
  );
};

const ImageScrollbar = ({ data }) => {
  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      style={{ overflow: 'hidden' }}
    >
      {data.map((item) => (
        <Box
          itemID={item.id}
          key={item.id}
          overflow="hidden"
          p="1"
          width="910px"
        >
          <Image
            placeholder="blur"
            width={1000}
            height={500}
            sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
            blurDataURL={item.url}
            src={item.url}
            alt="property"
          />
        </Box>
      ))}
    </ScrollMenu>
  );
};
export default ImageScrollbar;
