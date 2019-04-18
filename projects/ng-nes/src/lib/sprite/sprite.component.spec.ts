import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SpriteComponent, SpriteComponentProps } from './sprite.component';
import { getSingleNativeElement } from '../../test-helpers';

describe('SpriteComponent', () => {
  let testSubject: SpriteComponent;
  let fixture: ComponentFixture<SpriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpriteComponent ]
    });

    fixture = TestBed.createComponent(SpriteComponent);
    testSubject = fixture.componentInstance;

    testSubject.props = {} as SpriteComponentProps;
  }));

  describe('render', () => {

    it('creates a span with class ".nes-{{name of sprite given}}"', () => {
      // Given
      const expectedTagName = 'SPAN';
      testSubject.props.sprite = 'mario';

      // When
      fixture.detectChanges();

      // Then
      const sprite = getSingleNativeElement(fixture, '.nes-mario');
      expect(sprite).toBeTruthy();
      expect(sprite.tagName).toEqual(expectedTagName);
    });

    it('adds inline style on the span', () => {
      // Given
      const expectedStyle = 'blue';
      testSubject.props.sprite = 'mario';
      testSubject.props.style = {background: expectedStyle};

      // When
      fixture.detectChanges();

      // Then
      expect(getSingleNativeElement(fixture, '.nes-mario').style.background).toEqual(expectedStyle);
    });
  });
});
