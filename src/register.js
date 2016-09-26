import addons from '@kadira/storybook-addons';

addons.register('react-storybook-cmf', (api) => {
  // Also need to set a unique name to the panel.
  console.log('api', api);
/*
  addons.addPanel('kadira/notes/panel', {
    title: 'Notes',
    render: () => (
      <Notes channel={addons.getChannel()} api={api} />
    ),
  });
  */
});
