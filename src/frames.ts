import react from "../public/assets/react.svg";
import k8s from "../public/assets/k8s.svg";
import code from "../public/assets/code.png";
import smallDeer from "../public/assets/small-deer.svg";
import {IOptions} from "tsparticles/dist/Interfaces/Options/IOptions";
import {RecursivePartial} from "tsparticles/dist/Types/RecursivePartial";
import {MoveDirection} from "tsparticles/dist/Enums/MoveDirection";
import {OutMode} from "tsparticles/dist/Enums/OutMode";
import {HoverMode} from "tsparticles/dist/Enums/Modes/HoverMode";
import {ClickMode} from "tsparticles/dist/Enums/Modes/ClickMode";
import {ShapeType} from "tsparticles/dist/Enums/ShapeType";
import {PolygonMaskType} from "tsparticles/dist/Enums/PolygonMaskType";
import {PolygonMaskInlineArrangement} from "tsparticles/dist/Enums/PolygonMaskInlineArrangement";

export type TFrame = {
    backgroundColor: string;
    name: string;
    params: RecursivePartial<IOptions>;
    slug: string;
};

export const frames: TFrame[] = [
    {
        backgroundColor: 'linear-gradient(135deg, #606c88 0%, #3f4c6b 100%)',
        name: 'Simple',
        params: {
            particles: {
                number: {
                    value: 50
                },
                size: {
                    value: 3
                }
            },
            interactivity: {
                events: {
                    onhover: {
                        enable: true,
                        mode: HoverMode.repulse
                    }
                }
            }
        },
        slug: 'simple',
    },
    {
        backgroundColor: '#232741',
        name: 'Bubbles',
        params: {
            particles: {
                number: {
                    value: 160,
                    density: {
                        enable: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        speed: 4,
                        size_min: .3
                    }
                },
                line_linked: {
                    enable: false
                },
                move: {
                    random: true,
                    speed: 1,
                    direction: MoveDirection.top,
                    out_mode: OutMode.out
                }
            },
            interactivity: {
                events: {
                    onhover: {
                        enable: true,
                        mode: HoverMode.bubble
                    },
                    onclick: {
                        enable: true,
                        mode: ClickMode.repulse
                    },
                },
                modes: {
                    bubble: {
                        distance: 250,
                        duration: 2,
                        size: 0,
                        opacity: 0
                    },
                    repulse: {
                        distance: 400,
                        duration: 4
                    }
                }
            }
        },
        slug: 'bubbles'
    },
    {
        backgroundColor: 'linear-gradient(to bottom, #a90329 0%,#8f0222 44%,#6d0019 100%)',
        name: 'Snow',
        params: {
            particles: {
                number: {
                    value: 160,
                    density: {
                        enable: false
                    }
                },
                size: {
                    value: 10,
                    random: true
                },
                move: {
                    direction: MoveDirection.bottom,
                    out_mode: OutMode.out
                },
                line_linked: {
                    enable: false
                }
            },
            interactivity: {
                events: {
                    onclick: {
                        enable: true,
                        mode: ClickMode.remove
                    }
                },
                modes: {
                    remove: {
                        particles_nb: 10
                    }
                }
            }
        },
        slug: 'snow',
    },
    {
        backgroundColor: 'linear-gradient(45deg, #2d364c 0%,#252d3f 100%)',
        name: 'Night Sky',
        params: {
            particles: {
                number: {
                    value: 60,
                    density: {
                        enable: true,
                        value_area: 1500
                    }
                },
                line_linked: {
                    enable: true,
                    opacity: .02
                },
                move: {
                    direction: MoveDirection.right,
                    speed: .05
                },
                size: {
                    value: 1
                },
                opacity: {
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: .05
                    }
                }
            },
            interactivity: {
                events: {
                    onclick: {
                        enable: true,
                        mode: ClickMode.push
                    }
                },
                modes: {
                    push: {
                        particles_nb: 1
                    }
                }
            },
            retina_detect: true
        },
        slug: 'night-sky',
    },
    {
        backgroundColor: 'linear-gradient(45deg, #7d7e7d 0%,#0e0e0e 100%)',
        name: 'Multiple images',
        params: {
            particles: {
                number: {
                    value: 8,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                line_linked: {
                    enable: false
                },
                move: {
                    speed: 1,
                    out_mode: OutMode.out
                },
                shape: {
                    type: [ShapeType.image, ShapeType.circle],
                    image: [
                        {
                            src: react,
                            height: 20,
                            width: 23
                        },
                        {
                            src: k8s,
                            height: 20,
                            width: 20
                        },
                        {
                            src: code,
                            height: 20,
                            width: 20
                        }
                    ]
                },
                color: {
                    value: '#CCC'
                },
                size: {
                    value: 30,
                    random: false,
                    anim: {
                        enable: true,
                        speed: 4,
                        size_min: 10,
                        sync: false
                    }
                }
            },
            retina_detect: false
        },
        slug: 'images'
    },
    {
        backgroundColor: 'linear-gradient(45deg, #45484d 0%,#000000 100%)',
        name: 'Polygon mask',
        params: {
            fps_limit: 28,
            particles: {
                number: {
                    value: 200,
                    density: {
                        enable: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 30,
                    opacity: .4
                },
                move: {
                    speed: 1
                },
                opacity: {
                    anim: {
                        enable: true,
                        opacity_min: .05,
                        speed: 2,
                        sync: false,
                    },
                    value: .4
                }
            },
            polygon: {
                enable: true,
                scale: .5,
                type: PolygonMaskType.inline,
                move: {
                    radius: 10,
                },
                url: smallDeer,
                inline: {
                    arrangement: PolygonMaskInlineArrangement.equidistant
                },
                draw: {
                    enable: true,
                    stroke: {
                        color: 'rgba(255, 255, 255, .2)'
                    }
                }
            },
            retina_detect: false,
            interactivity: {
                events: {
                    onhover: {
                        enable: true,
                        mode: HoverMode.bubble
                    }
                },
                modes: {
                    bubble: {
                        size: 6,
                        distance: 40
                    }
                }
            }
        },
        slug: 'mask',
    }
];