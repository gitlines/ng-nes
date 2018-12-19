import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export const getSingleNativeElement = (fixture: ComponentFixture<any>, cssClass: string): HTMLElement => {
  return fixture.debugElement.query(By.css(cssClass)).nativeElement;
};

export const getMultipleNativeElements = (fixture: ComponentFixture<any>, cssClass: string): HTMLElement[] => {
  const nativeElements = [];
  fixture.debugElement.queryAll(By.css(cssClass)).map((element) => nativeElements.push(element));
  return nativeElements;
};
