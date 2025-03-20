export const plants = {
  herbs: [
    {
      id: 1,
      name: "Lavender",
      scientificName: "Lavandula angustifolia",
      nativeRegion: "Mediterranean",
      description: "Known for its calming properties and distinctive purple flowers. Used for relaxation, sleep, and anxiety relief.",
      image: "https://images.unsplash.com/photo-1587412874208-a0d6a31fb980?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      modelUrl: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF/Duck.gltf",
      properties: [
        {
          name: "Medicinal Properties",
          details: "Anti-anxiety, antiseptic, anti-inflammatory, antimicrobial"
        },
        {
          name: "Traditional Uses",
          details: "Sleep aid, anxiety relief, skin care, aromatherapy"
        },
        {
          name: "Active Compounds",
          details: "Linalool, linalyl acetate, lavandulol, geraniol"
        }
      ],
      growingInfo: "Plant in well-draining soil with full sun. Water sparingly once established. Drought tolerant. Prune after flowering to encourage bushier growth.",
      harvestingTips: "Harvest stems when flower buds have formed but before they're fully open for maximum essential oil content."
    },
    {
      id: 2,
      name: "Chamomile",
      scientificName: "Matricaria chamomilla",
      nativeRegion: "Europe and West Asia",
      description: "Gentle herb with daisy-like flowers used for its calming and anti-inflammatory properties.",
      image: "https://images.unsplash.com/photo-1602936291223-d9ccc38d61d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      modelUrl: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF/Duck.gltf",
      properties: [
        {
          name: "Medicinal Properties",
          details: "Anti-inflammatory, anti-anxiety, mild sedative, digestive aid"
        },
        {
          name: "Traditional Uses",
          details: "Sleep aid, digestive problems, skin conditions, anxiety relief"
        },
        {
          name: "Active Compounds",
          details: "Apigenin, bisabolol, chamazulene, matricin"
        }
      ],
      growingInfo: "Grows in poor to moderately fertile, well-drained soil. Prefers full sun to partial shade. Water regularly until established.",
      harvestingTips: "Harvest flower heads when they are fully open, ideally in the morning after dew has dried."
    }
  ],
  shrubs: [
    {
      id: 3,
      name: "Rosemary",
      scientificName: "Salvia rosmarinus",
      nativeRegion: "Mediterranean",
      description: "Aromatic evergreen shrub with needle-like leaves, known for improving memory and concentration.",
      image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      modelUrl: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF/Duck.gltf",
      properties: [
        {
          name: "Medicinal Properties",
          details: "Antioxidant, anti-inflammatory, antimicrobial, memory enhancement"
        },
        {
          name: "Traditional Uses",
          details: "Memory improvement, hair health, digestive aid, circulatory support"
        },
        {
          name: "Active Compounds",
          details: "Rosmarinic acid, camphor, carnosic acid, ursolic acid"
        }
      ],
      growingInfo: "Plant in well-draining soil with full sun. Drought tolerant once established. Avoid overwatering.",
      harvestingTips: "Harvest sprigs as needed throughout the year. For best flavor, harvest before flowering."
    },
    {
      id: 4,
      name: "Elderberry",
      scientificName: "Sambucus nigra",
      nativeRegion: "Europe and North America",
      description: "Deciduous shrub known for its immune-boosting berries and delicate flowers.",
      image: "https://images.unsplash.com/photo-1591676023577-a1c54c1a5105?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      modelUrl: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF/Duck.gltf",
      properties: [
        {
          name: "Medicinal Properties",
          details: "Antiviral, immune-boosting, anti-inflammatory, antioxidant"
        },
        {
          name: "Traditional Uses",
          details: "Cold and flu prevention, fever reduction, respiratory health"
        },
        {
          name: "Active Compounds",
          details: "Anthocyanins, flavonoids, vitamins A and C"
        }
      ],
      growingInfo: "Grows in most soil types, preferring moist, fertile soil. Full sun to partial shade. Prune annually after fruiting.",
      harvestingTips: "Harvest flowers in late spring when fully open. Harvest berries when fully ripe (dark purple to black) in early autumn."
    }
  ],
  trees: [
    {
      id: 5,
      name: "Neem",
      scientificName: "Azadirachta indica",
      nativeRegion: "Indian Subcontinent",
      description: "Evergreen tree revered in Ayurvedic medicine for its powerful antiseptic and healing properties.",
      image: "https://images.unsplash.com/photo-1593208234464-31aed3b80131?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      modelUrl: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF/Duck.gltf",
      properties: [
        {
          name: "Medicinal Properties",
          details: "Antiseptic, antifungal, antiparasitic, anti-inflammatory"
        },
        {
          name: "Traditional Uses",
          details: "Skin conditions, dental health, pest control, fever reduction"
        },
        {
          name: "Active Compounds",
          details: "Azadirachtin, nimbin, nimbidin, quercetin"
        }
      ],
      growingInfo: "Grows in variety of soils, drought-resistant. Requires full sun and good drainage. Protect from frost when young.",
      harvestingTips: "Harvest leaves throughout the year as needed. Collect seeds when fruits turn yellow to yellowish-green."
    },
    {
      id: 6,
      name: "Eucalyptus",
      scientificName: "Eucalyptus globulus",
      nativeRegion: "Australia",
      description: "Tall aromatic tree with distinctive blue-green leaves used for respiratory conditions.",
      image: "https://images.unsplash.com/photo-1572988163424-e2b741f3f637?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      modelUrl: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF/Duck.gltf",
      properties: [
        {
          name: "Medicinal Properties",
          details: "Expectorant, decongestant, antiseptic, anti-inflammatory"
        },
        {
          name: "Traditional Uses",
          details: "Respiratory conditions, fever reduction, wound healing, insect repellent"
        },
        {
          name: "Active Compounds",
          details: "Eucalyptol (cineole), pinene, limonene, terpineol"
        }
      ],
      growingInfo: "Requires full sun and well-draining soil. Drought tolerant once established. Fast growing.",
      harvestingTips: "Harvest mature leaves for maximum oil content. Young branches with leaves can be cut for fresh use or drying."
    }
  ]
} 