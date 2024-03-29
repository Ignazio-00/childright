import { test, expect } from "@playwright/test";

test("Application flow testing resultTemplates to noReaction", async ({
  page,
}) => {
  await page.goto("/resultTemplates");
  await page.getByRole("heading", { name: "Vorlage 1:" });
  await page.getByRole("heading", {
    name: "Für das persönliche Gespräch mit deinen Eltern",
  });
  await page.waitForSelector("button[data-button='true']", {
    timeout: 3000,
  });
  await page.getByRole("button", { name: "Weiter" }).click();
  await page.waitForSelector("a[data-button='true'][href='/noReaction']", {
    timeout: 3000,
  });
  await page.getByRole("link", { name: "Keine Reaktion" }).click();
  await page.waitForSelector("span:has-text('Weiter')", {
    timeout: 5000,
  });
  await expect(page).toHaveURL(/noReaction/);
});
