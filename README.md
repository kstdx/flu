# flu

Article aggregation blog

[**demo website here**](https://flu.deno.dev)

## usage & how to deploy

> I made this with Fresh, so please install Deno before using this app.

```sh
git clone https://github.com/kstdx/flu # clone repo
cd flu # move to dir
sudo rm -r .git # remove .git dir

# development
deno task start # start dev server

# production
deployctl deploy --project=your-project-name --prod --token=your-deploy-token main.ts
```
