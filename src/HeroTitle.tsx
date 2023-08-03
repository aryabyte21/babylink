import {
  createStyles,
  Container,
  Text,
  Button,
  Group,
  Input,
  // Tooltip,
  CopyButton,
} from "@mantine/core";
// import { GithubIcon } from "@mantine/ds";
import { useState } from "react";
import { IconBabyCarriage} from "@tabler/icons";
// import { Notification } from "@mantine/core";
// import { IconCheck } from "@tabler/icons";
import { FooterSocial } from "./FooterSocial";
const BREAKPOINT = "@media (max-width: 755px)";

// function Message(child: any) {
//   // the alert is displayed by default
//   const [alert, setAlert] = useState(child);

//   useEffect(() => {
//     // when the component is mounted, the alert is displayed for 3 seconds
//     setTimeout(() => {
//       setAlert(false);
//     }, 3000);
//   }, []);

//   return (
//     alert && (
//       <>
//         <Notification icon={<IconCheck size={18} />} color="teal" title="Yaay!">
//           Babylink is copied to the clipboard.
//         </Notification>
//       </>
//     )
//   );
// }

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    boxSizing: "border-box",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
  },

  inner: {
    position: "relative",
    paddingTop: 0,
    paddingBottom: 120,

    [BREAKPOINT]: {
      paddingBottom: 80,
      paddingTop: 80,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 62,
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,

    [BREAKPOINT]: {
      fontSize: 42,
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.sm,
    fontSize: 24,

    [BREAKPOINT]: {
      fontSize: 18,
    },
  },

  controls: {
    marginTop: theme.spacing.sm * 2,

    [BREAKPOINT]: {
      marginTop: theme.spacing.sm,
    },
  },

  control: {
    height: 54,
    paddingLeft: 38,
    paddingRight: 38,

    [BREAKPOINT]: {
      height: 54,
      paddingLeft: 18,
      paddingRight: 18,
      flex: 1,
    },
  },
}));

export function HeroTitle() {
  const { classes } = useStyles();

  let [ft, ] = useState(false);
  const [name, setName] = useState("");
  // let copied = false;
  // let onCopy = () => {
  //   copied = true;
  //   setTimeout(function () {
  //     copied = false;
  //   }, 1000);
  // };
  // var result = null;
  async function updateGoly(data: any) {
    console.log(ft);
    const json = {
      redirect: data.redirect,
      goly: data.goly,
      random: data.random,
    };
    const res = await fetch("https://goserver-306x.onrender.com/goly", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(json),
    }).then((response) => {
      return response;
    });
    const json1 = await res.json();
    console.log("http://localhost:8000/r/" + json1.goly);
    navigator.clipboard.writeText("https://babyy.link/r/" + json1.goly);
  }

  let data = {
    redirect: "",
    goly: "",
    random: true,
  };

  return (
    <div>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          URL{" "}
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            inherit
          >
            shorter than
          </Text>{" "}
         a smoker's life.
        </h1>

        <Text className={classes.description} color="dimmed">
          Generate urls faster than ever.
        </Text>

        <Group className={classes.controls}>
          <Input
            icon={<IconBabyCarriage size={30} />}
            placeholder="Paste your link here"
            name="redirect"
            id="redirect"
            size="lg"
            value={name}
            onChange={(e: any) => setName(e.target.value)}
          />

          <CopyButton value="https://mantine.dev">
            {({ copied, copy }) => (
              <Button
                color={copied ? "teal" : "blue"}
                size="xl"
                className={classes.control}
                variant="gradient"
                gradient={{ from: "blue", to: "cyan" }}
                onClick={() => updateGoly(data)}
              >
                {copied ? "Copied url" : "Copy babylink"}
              </Button>
            )}
          </CopyButton>
          {(data.redirect = name)}
        </Group>
      </Container>
      <FooterSocial/>
    </div>
  );
}
