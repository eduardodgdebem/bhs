import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },

  collections: {
    // ─── TEAM MEMBERS ────────────────────────────────────────────────
    team: collection({
      label: 'Team Members',
      slugField: 'name',
      path: 'src/content/team/*',
      format: { contentField: 'bio' },
      schema: {
        name: fields.slug({
          name: {
            label: 'Name',
          },
        }),
        role: fields.text({
          label: 'Role',
          description: 'e.g. CEO & Hairdresser, Facial Esthetician',
        }),
        experience: fields.text({
          label: 'Years of Experience',
          description: 'e.g. 25 years',
        }),
        photo: fields.image({
          label: 'Photo',
          directory: 'src/assets/team',
          publicPath: '../../assets/team/',
        }),
        bio: fields.markdoc({
          label: 'Biography',
        }),
      },
    }),

    // ─── SERVICES ────────────────────────────────────────────────────
    services: collection({
      label: 'Services',
      slugField: 'title',
      path: 'src/content/services/*',
      format: { contentField: 'description' },
      schema: {
        title: fields.slug({
          name: {
            label: 'Service Title',
            description: 'e.g. Bride Production, Sweet Sixteen',
          },
        }),
        image: fields.image({
          label: 'Service Image',
          directory: 'src/assets/services',
          publicPath: '../../assets/services/',
        }),
        description: fields.markdoc({
          label: 'Description',
        }),
      },
    }),

    // ─── UNITS / LOCATIONS ───────────────────────────────────────────
    units: collection({
      label: 'Salon Locations',
      slugField: 'city',
      path: 'src/content/units/*',
      format: { contentField: 'description' },
      schema: {
        city: fields.slug({
          name: {
            label: 'City',
            description: 'e.g. Naples, Criciúma',
          },
        }),
        state: fields.text({
          label: 'State / Region',
          description: 'e.g. Florida, SC',
        }),
        country: fields.text({
          label: 'Country',
          description: 'e.g. United States, Brazil',
        }),
        label: fields.text({
          label: 'Badge Label',
          description: 'Short label shown on the card, e.g. First USA unit, 4 locations',
        }),
        phone: fields.text({
          label: 'Phone Number',
        }),
        image: fields.image({
          label: 'Location Photo',
          directory: 'src/assets/units',
          publicPath: '../../assets/units/',
        }),
        description: fields.markdoc({
          label: 'Description',
        }),
      },
    }),

    // ─── CLIENT TESTIMONIALS ─────────────────────────────────────────
    testimonials: collection({
      label: 'Client Testimonials',
      slugField: 'clientName',
      path: 'src/content/testimonials/*',
      format: { contentField: 'quote' },
      schema: {
        clientName: fields.slug({
          name: {
            label: 'Client Name',
          },
        }),
        occasion: fields.text({
          label: 'Occasion',
          description: 'e.g. Bride, Mother of the debutante, Hair transformation',
        }),
        quote: fields.markdoc({
          label: 'Testimonial Quote',
        }),
      },
    }),
  },
});
