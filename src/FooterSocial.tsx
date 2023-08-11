import { createStyles, Container, Group, ActionIcon } from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandGithub,
  IconAt
} from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function FooterSocial() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        Made with ❤️ by arya
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <a href="https://twitter.com/aryabyte">
            <ActionIcon size="lg">
              <IconBrandTwitter size={18} stroke={1.5} />
            </ActionIcon>
          </a>
          <a href="https://www.youtube.com/watch?v=pzow5wUp7hY">
            <ActionIcon size="lg">
              <IconBrandYoutube size={18} stroke={1.5} />
            </ActionIcon>
          </a>
          <a href="https://github.com/aryabyte21">
            <ActionIcon size="lg">
              <IconBrandGithub size={18} stroke={1.5} />
            </ActionIcon>
          </a>
          <a href="https://aryafolio.vercel.app/">
            <ActionIcon size="lg">
              <IconAt size={18} stroke={1.5} />
            </ActionIcon>
          </a>
        </Group>
      </Container>
    </div>
  );
}
